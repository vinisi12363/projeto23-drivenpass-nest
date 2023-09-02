import { Injectable } from '@nestjs/common';
import { CardDto } from '../dto/card.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServerInputCardException } from '../exceptions/cards.exceptions';

@Injectable()
export class CardsRepository {

    constructor(private readonly prisma: PrismaService) { }

    async addNewCard(body: any): Promise<void> {
        try {
            await this.prisma.cards.create({ data : body })
        }
        catch (e) {
            throw new ServerInputCardException();
        }
    }

    async getAllcards(): Promise<CardDto[]> {
        return await this.prisma.cards.findMany();
    }

    async getUserById(id: number): Promise<CardDto | null> {
        return await this.prisma.cards.findFirst({
            where: { id }
        })
    }

    async updateUserById(id: number, body: CardDto): Promise<void> {
        try {
            await this.prisma.cards.update({
                where: { id },
                data: body
            })
        }
        catch {
            throw new ServerInputCardException();
        }
    }

    async deleteUserById(id: number): Promise<void> {
        await this.prisma.cards.delete({
            where: { id }
        })
    }


}