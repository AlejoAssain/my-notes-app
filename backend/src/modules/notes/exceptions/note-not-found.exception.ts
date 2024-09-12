import { NotFoundException } from '@nestjs/common';

export class NoteNotFoundException extends NotFoundException {
  constructor(noteId?: number) {
    super(noteId ? `Note with the ID ${noteId} not found!` : 'Note not found');
  }
}
