import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { CredentialDto } from './dto/credential.dto';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags("Credentials routes")
@ApiBearerAuth()
@Controller('credentials')
export class CredentialsController {
  constructor(private readonly credentialsService: CredentialsService) {}
  @Get('health')
  @ApiOperation({ summary: "Check availability in route credentials" })
  getHello(){
    return this.credentialsService.getHealthCredentials();
  }

  @Post()
  @ApiOperation({ summary: "Make a request to create a credential data" })
  create(@Body() createCredentialDto: CredentialDto) {
    return this.credentialsService.create(createCredentialDto);
  }

  @Get()

  findAll() {
    return this.credentialsService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: "id" })
  @ApiOperation({ summary: "Make a request to get a credential data by id" })
  findOne(@Param('id') id: string) {
    return this.credentialsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCredentialDto: CredentialDto) {
    return this.credentialsService.update(+id, updateCredentialDto);
  }

  @Delete(':id')
  @ApiParam({ name: "id" })
  @ApiOperation({ summary: "Make a request to delete a credential data by id" })
  remove(@Param('id') id: string) {
    return this.credentialsService.remove(+id);
  }
}
