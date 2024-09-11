import { UserNotes } from './components/UserNotes.tsx';
import { NotesProvider } from './contexts';

export const Notes = () => {
  return (
    <NotesProvider>
      <UserNotes />
    </NotesProvider>
  );
};
