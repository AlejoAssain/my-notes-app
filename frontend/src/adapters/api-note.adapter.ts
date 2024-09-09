import {ApiNoteModel, NoteModel} from '#models/index.ts';

export const apiNoteAdapter = (note: NoteModel) : ApiNoteModel => {
  return {
    id: note.id,
    content: note.content,
    active: note.active,
    categories: note.categories
  }
}