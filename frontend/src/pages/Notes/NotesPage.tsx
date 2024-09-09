import { Notes } from './components';
import { NotesProvider } from './contexts';

export const NotesPage = () => {
  return (
    <NotesProvider>
      <Notes />
    </NotesProvider>
  );
};
