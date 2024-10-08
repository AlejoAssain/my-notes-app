import { AxiosResponse } from 'axios';

import { noteAdapter } from '../../../adapters';
import { ApiNoteModel, NoteModel } from '../../../models';
import {
  apiClientService,
  generateHeader,
} from '../../../services/api-client.service.ts';

interface GetCategoriesResponse {
  categories: string[];
}

export const getCategoriesData = async (): Promise<string[]> => {
  const response: AxiosResponse<GetCategoriesResponse> =
    await apiClientService.get('/categories');
  return response.data.categories;
};

export const getNotesData = async (token: string): Promise<NoteModel[]> => {
  const response: AxiosResponse<ApiNoteModel[]> = await apiClientService.get(
    '/notes',
    generateHeader(token),
  );

  return response.data.map((note) => noteAdapter(note));
};

interface CreateNoteRequestBody {
  content: string;
  active: boolean;
  categories: string[];
}

export const createNote = async (
  newNoteData: CreateNoteRequestBody,
  token: string,
): Promise<NoteModel> => {
  const response: AxiosResponse<ApiNoteModel> = await apiClientService.post(
    '/notes',
    newNoteData,
    generateHeader(token),
  );

  return noteAdapter(response.data);
};

type UpdateNoteRequestBody = Partial<CreateNoteRequestBody>;

export const updateNote = async (
  editedNote: NoteModel,
  token: string,
): Promise<NoteModel> => {
  const requestBody: UpdateNoteRequestBody = {
    content: editedNote.content,
    active: editedNote.active,
    categories: editedNote.categories,
  };
  const response: AxiosResponse<ApiNoteModel> = await apiClientService.patch(
    `/notes/${editedNote.id}`,
    requestBody,
    generateHeader(token),
  );

  return noteAdapter(response.data);
};

export const deleteNote = async (
  noteId: number,
  token: string,
): Promise<NoteModel> => {
  const response: AxiosResponse<ApiNoteModel> = await apiClientService.delete(
    `/notes/${noteId}`,
    generateHeader(token),
  );

  return noteAdapter(response.data);
};
