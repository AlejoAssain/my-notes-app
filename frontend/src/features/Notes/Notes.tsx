import { UserNotes } from './components';
import { FiltersProvider, NotesProvider } from './contexts';

export const Notes = () => {
  return (
    <NotesProvider>
      <FiltersProvider>
        <UserNotes />
      </FiltersProvider>
    </NotesProvider>
  );
};
