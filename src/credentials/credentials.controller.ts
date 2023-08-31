import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CredentialsService } from './credentials.service';
import { CredentialDto } from './dto/credential.dto';


@Controller('credentials')
export class CredentialsController {
  constructor(private readonly credentialsService: CredentialsService) {}
  @Get('health')
  getHello(){
    return this.credentialsService.getHealthCredentials();
  }

  @Post()
  create(@Body() createCredentialDto: CredentialDto) {
    return this.credentialsService.create(createCredentialDto);
  }

  @Get()
  findAll() {
    return this.credentialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.credentialsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCredentialDto: CredentialDto) {
    return this.credentialsService.update(+id, updateCredentialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.credentialsService.remove(+id);
  }
}
