import { Injectable } from '@nestjs/common';
import { NoteDto } from './dto/note.dto';


@Injectable()
export class NotesService {
  
  getHealthNotes(): string {
    return 'Notes online!';
  }

  create(createNoteDto: NoteDto) {
    return 'This action adds a new note';
  }

  findAll() {
    return `This action returns all notes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: NoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
