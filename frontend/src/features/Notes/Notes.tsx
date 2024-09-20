import { UserNotes } from './components';
import { FiltersProvider, NotesProvider } from './providers';

export const Notes = () => {
  return (
    <NotesProvider>
      <FiltersProvider>
        <UserNotes />
      </FiltersProvider>
    </NotesProvider>
  );
};
