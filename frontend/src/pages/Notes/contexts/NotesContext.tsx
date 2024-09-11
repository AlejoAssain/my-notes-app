import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useSession } from '../../../contexts';
import { NoteModel } from '../../../models';
import { delayUtil } from '../../../utilities';
import { createNote, deleteNote, getCategoriesData, getNotesData, updateNote } from '../services/notes.service.ts';

interface NotesProviderProps {
  children: ReactNode;
}

interface NewNoteModel {
  content: string;
  active: boolean;
  categories: string[];
}

interface INotesContext {
  categories: string[],
  notes: NoteModel[];
  getNotes: () => Promise<void>;
  addNote: (newNote: NewNoteModel) => void;
  editNote: (updatedNote: NoteModel) => void;
  removeNote: (id: number) => void;
  loading: boolean;
  error: string | null;
}

const NotesContext = createContext<INotesContext | undefined>(undefined);

export const NotesProvider = ({ children }: NotesProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [notes, setNotes] = useState<NoteModel[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const { session } = useSession();

  const setErrorMessage = (e: unknown) => {
    setError(e instanceof Error ? e.message : 'Unknown error occurred!');
  };

  const getNotes = async () => {
    try {
      setLoading(true);
      const categoriesFetched = await getCategoriesData();
      setCategories(categoriesFetched);

      if (!session) throw new Error('No session');
      const notesFetched = await getNotesData(session.token);
      setNotes(notesFetched);

      // force delay to see loading component
      await delayUtil(500);
    } catch (e) {
      setErrorMessage(e);
    } finally {
      setLoading(false);
    }
  };

  const addNote = async (newNote: NewNoteModel) => {
    try {
      setLoading(true);
      if (!session) throw new Error('No session');
      const noteAdded = await createNote(newNote, session.token);
      setNotes([...notes, noteAdded]);
    } catch (e) {
      setErrorMessage(e);
    } finally {
      setLoading(false);
    }
  };

  const editNote = async (editedNote: NoteModel) => {
    try {
      setLoading(true);
      if (!session) throw new Error('No session');
      const updatedNote = await updateNote(editedNote, session.token);
      setNotes(
        notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)),
      );
    } catch (e) {
      setErrorMessage(e);
    } finally {
      setLoading(false);
    }
  };

  const removeNote = async (noteId: number): Promise<void> => {
    try {
      setLoading(true);
      if (!session) throw new Error('No session');
      const deletedNote = await deleteNote(noteId, session.token);
      setNotes(notes.filter((note) => note.id !== deletedNote.id));
    } catch (e) {
      setErrorMessage(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <NotesContext.Provider
      value={{
        categories,
        notes,
        getNotes,
        addNote,
        editNote,
        removeNote,
        loading,
        error,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) throw new Error('useNotes must be used inside NotesProvider');
  return context;
};
