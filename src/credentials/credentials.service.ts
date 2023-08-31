import { Injectable } from '@nestjs/common';
import { CredentialDto } from './dto/credential.dto';

@Injectable()
export class CredentialsService {
  getHealthCredentials(): string {
    return 'Credentials online!';
  }
 
  create(createCredentialDto: CredentialDto) {
    return 'This action adds a new credential';
  }

  findAll() {
    return `This action returns all credentials`;
  }

  findOne(id: number) {
    return `This action returns a #${id} credential`;
  }

  update(id: number, updateCredentialDto: CredentialDto) {
    return `This action updates a #${id} credential`;
  }

  remove(id: number) {
    return `This action removes a #${id} credential`;
  }
}
