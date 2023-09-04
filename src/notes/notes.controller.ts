import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NoteDto } from './dto/note.dto';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags("Notes routes")
@ApiBearerAuth()
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}
  @Get('health')
  @ApiOperation({ summary: "Check availability in route notes" })
  getHello(){
    return this.notesService.getHealthNotes()
  }

  @Post()
  @ApiOperation({ summary: "Make a request to create a new note data" })
  @ApiParam({ name: "id" })
  create(@Body() createNoteDto: NoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "Make a request to get all note data by id" })
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: NoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  @ApiParam({ name: "id" })
  @ApiOperation({ summary: "Make a request to delete a note data by id" })
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
