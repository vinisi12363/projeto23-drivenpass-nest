import { Injectable } from '@nestjs/common';
import { SessionDto } from './dto/session.dto';


@Injectable()
export class SessionsService {
  
  getHealthSessions(): string {
    return 'Sessions online!';
  }

  create(createSessionDto: SessionDto) {
    return 'This action adds a new session';
  }

  findAll() {
    return `This action returns all sessions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: SessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
