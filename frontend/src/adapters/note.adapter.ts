import { ApiNoteModel, NoteModel } from '../models';

export const noteAdapter = (apiNote: ApiNoteModel): NoteModel => {
  return {
    id: apiNote.id,
    content: apiNote.content,
    active: apiNote.active,
    categories: apiNote.categories,
  };
};
