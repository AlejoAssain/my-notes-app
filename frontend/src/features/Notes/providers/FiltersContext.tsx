import { createContext, ReactNode, useContext, useState } from 'react';

import { NoteModel } from '../../../models';
import { NoteStatusFilter } from '../enums';

interface FiltersProviderProps {
  children: ReactNode;
}

interface IFiltersContext {
  statusFilter: NoteStatusFilter;
  categoryFilter: string;
  changeStatusFilter: (newFilter: NoteStatusFilter) => void;
  changeCategoryFilter: (newFilter: string) => void;
  filterNotes: (notes: NoteModel[]) => NoteModel[];
}

const FiltersContext = createContext<IFiltersContext | undefined>(undefined);

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [statusFilter, setStatusFilter] = useState<NoteStatusFilter>(
    NoteStatusFilter.All,
  );
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const changeStatusFilter = (newFilter: NoteStatusFilter) => {
    setStatusFilter(newFilter);
  };

  const changeCategoryFilter = (newFilter: string) => {
    setCategoryFilter(newFilter);
  };

  const filterNotes = (notes: NoteModel[]) => {
    let filteredNotes = [...notes];
    filteredNotes = filteredNotes.filter((note) => {
      if (statusFilter === 'all') return true;
      if (statusFilter === 'active') return note.active;
      if (statusFilter === 'archived') return !note.active;
      return true;
    });

    if (categoryFilter !== 'all') {
      filteredNotes = filteredNotes.filter((note) =>
        note.categories.includes(categoryFilter),
      );
    }

    return filteredNotes;
  };

  return (
    <FiltersContext.Provider
      value={{
        statusFilter,
        categoryFilter,
        changeStatusFilter,
        changeCategoryFilter,
        filterNotes,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context)
    throw new Error('useFilters must be used inside FiltersProvider');
  return context;
};
