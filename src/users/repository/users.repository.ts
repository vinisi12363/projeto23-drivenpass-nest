import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServerInputUserException } from '../exceptions/posts.exceptions';

@Injectable()
export class UsersRepository {

    constructor(private readonly prisma: PrismaService) { }

    async addNewUser(body: UserDto): Promise<void> {
        try {
            await this.prisma.users.create({ data: body })
        }
        catch (e) {
            throw new ServerInputUserException();
        }
    }

    async getAllUsers(): Promise<UserDto[]> {
        return await this.prisma.users.findMany();
    }

    async getUserById(id: number): Promise<UserDto | null> {
        return await this.prisma.users.findFirst({
            where: { id }
        })
    }

    async updateUserById(id: number, body: UserDto): Promise<void> {
        try {
            await this.prisma.users.update({
                where: { id },
                data: body
            })
        }
        catch {
            throw new ServerInputUserException();
        }
    }

    async deleteUserById(id: number): Promise<void> {
        await this.prisma.users.delete({
            where: { id }
        })
    }


}