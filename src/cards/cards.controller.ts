import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardDto } from './dto/card.dto';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags("Cards routes")
@ApiBearerAuth()

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}
  @Get('health')
  @ApiOperation({ summary: "Check availability in route cards" })
  getHello(){
    return this.cardsService.getHealthCards();
  }

  @Post()
  @ApiOperation({ summary: "Make a request for create new credit/debit/virtual card data" })
  create(@Body() createCardDto: CardDto) {
    return this.cardsService.create(createCardDto);
  }

  @Get()
  @ApiOperation({ summary: "Make a request to get all card data" })
  findAll() {
    return this.cardsService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: "id" })
  @ApiOperation({ summary: "Make a request to get credit/debit/virtual card data by id" })
  findOne(@Param('id') id: string) {
    return this.cardsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCardDto: CardDto) {
    return this.cardsService.update(+id, updateCardDto);
  }

  @Delete(':id')
  @ApiParam({ name: "id" })
  @ApiOperation({ summary: "Make a request to delete credit/debit/virtual card data by id" })
  remove(@Param('id') id: string) {
    return this.cardsService.remove(+id);
  }
}
