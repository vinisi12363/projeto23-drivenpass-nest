import { Injectable } from '@nestjs/common';
import { CredentialDto } from '../dto/Credential.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServerInputCredentialException } from '../exceptions/credentials.exceptions';

@Injectable()
export class CredentialsRepository {

    constructor(private readonly prisma: PrismaService) { }

    async addNewCredential(body: any): Promise<void> {
        try {
            await this.prisma.credentials.create({ data: body })
        }
        catch (e) {
            throw new ServerInputCredentialException();
        }
    }

    async getAllCredentials(): Promise<CredentialDto[]> {
        return await this.prisma.credentials.findMany();
    }

    async getCredentialById(id: number): Promise<CredentialDto | null> {
        return await this.prisma.credentials.findFirst({
            where: { id }
        })
    }

    async updateCredentialById(id: number, body: CredentialDto): Promise<void> {
        try {
            await this.prisma.credentials.update({
                where: { id },
                data: body
            })
        }
        catch {
            throw new ServerInputCredentialException();
        }
    }

    async deleteCredentialById(id: number): Promise<void> {
        await this.prisma.credentials.delete({
            where: { id }
        })
    }


}