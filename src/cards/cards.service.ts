import { Injectable } from '@nestjs/common';
import { CardDto } from './dto/card.dto';

@Injectable()
export class CardsService {
  getHealthCards(): string {
    return 'Cards online!';
  }

  create(createCardDto: CardDto) {
    return 'This action adds a new card';
  }

  findAll() {
    return `This action returns all cards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }

  update(id: number, updateCardDto: CardDto) {
    return `This action updates a #${id} card`;
  }

  remove(id: number) {
    return `This action removes a #${id} card`;
  }
}
