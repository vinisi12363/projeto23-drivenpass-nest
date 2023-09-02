import { Injectable } from '@nestjs/common';
import { NoteDto } from '../dto/Note.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ServerInputNotesException } from '../exceptions/notes.exceptions';

@Injectable()
export class NotesRepository {

    constructor(private readonly prisma: PrismaService) { }

    async addNewNote(body: any): Promise<void> {
        try {
            await this.prisma.notes.create({ data: body })
        }
        catch (e) {
            throw new ServerInputNotesException();
        }
    }

    async getAllNotes(): Promise<NoteDto[]> {
        return await this.prisma.notes.findMany();
    }

    async getNoteById(id: number): Promise<NoteDto | null> {
        return await this.prisma.notes.findFirst({
            where: { id }
        })
    }

    async updateNoteById(id: number, body: NoteDto): Promise<void> {
        try {
            await this.prisma.notes.update({
                where: { id },
                data: body
            })
        }
        catch {
            throw new ServerInputNotesException();
        }
    }

    async deleteNoteById(id: number): Promise<void> {
        await this.prisma.notes.delete({
            where: { id }
        })
    }


}