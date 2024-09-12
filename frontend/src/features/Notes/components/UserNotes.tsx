import { useState } from 'react';

import { Button } from '../../../components/Button';
import { Loading } from '../../../components/Loading';
import { Modal } from '../../../components/Modal';
import { useNotes } from '../contexts';
import { CategoryFilterSelection } from './CategoryFilterSelection.tsx';
import { NewNoteForm } from './NewNoteForm.tsx';
import { Note } from './Note.tsx';
import { StatusFilterSelection } from './StatusFilterSelection.tsx';
import { ControlButtonsContainer, FiltersContainer, NotesWrapper } from './styled-components';

export type NoteStatusFilter = 'all' | 'active' | 'archived';

export const UserNotes = () => {
  const { notes, loading } = useNotes();
  const [statusFilter, setStatusFilter] = useState<NoteStatusFilter>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [formHidden, setFormHidden] = useState(true);

  const changeStatusFilter = (newStatusFilter: NoteStatusFilter) => {
    setStatusFilter(newStatusFilter);
  };

  const changeCategoryFilter = (newCategoryFilter: string) => {
    setCategoryFilter(newCategoryFilter);
  };

  const getFilteredNotes = () => {
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

  return loading ? (
    <Loading />
  ) : (
    <>
      <ControlButtonsContainer>
        <FiltersContainer>
          <StatusFilterSelection
            label={'Filter by status:'}
            changeStatusFilter={changeStatusFilter}
          />
          <CategoryFilterSelection
            label={'Filter by category'}
            changeCategoryFilter={changeCategoryFilter}
          />
        </FiltersContainer>
        <Button onClick={() => setFormHidden(!formHidden)} >
          { formHidden ? 'Add note' : 'Cancel'}
        </Button>
      </ControlButtonsContainer>
      {!formHidden ? (
        <Modal isOpen={!formHidden} close={() => setFormHidden(true)}>
          <NewNoteForm closeForm={() => setFormHidden(true)} />
        </Modal>
      ) : null}
      <NotesWrapper>
        {notes.length > 0 ? (
          getFilteredNotes().length > 0 ? (
            getFilteredNotes().map((note) => <Note key={note.id} note={note} />)
          ) : (
            <h4>No notes matched the filter...</h4>
          )
        ) : (
          <h4>No notes yet...</h4>
        )}
      </NotesWrapper>
    </>
  );
};
