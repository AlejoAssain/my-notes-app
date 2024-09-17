import { useState } from 'react';

import { Button } from '../../../../components/Button';
import { Loading } from '../../../../components/Loading';
import { Modal } from '../../../../components/Modal';
import { useFilters, useNotes } from '../../contexts';
import { Filters } from '../Filters';
import { NewNoteForm } from '../NewNoteForm';
import { Note } from '../Note';
import { UserNotesHeader, NotesWrapper } from './UserNotes.styles.ts';

export const UserNotes = () => {
  const { notes, loading } = useNotes();
  const [formHidden, setFormHidden] = useState(true);

  const { filterNotes } = useFilters();

  return loading ? (
    <Loading />
  ) : (
    <>
      <UserNotesHeader>
        <Filters />
        <Button onClick={() => setFormHidden(!formHidden)} fontSize="small">
          {formHidden ? 'Add note' : 'Cancel'}
        </Button>
      </UserNotesHeader>
      {!formHidden ? (
        <Modal isOpen={!formHidden} close={() => setFormHidden(true)}>
          <NewNoteForm closeForm={() => setFormHidden(true)} />
        </Modal>
      ) : null}
      <NotesWrapper>
        {notes.length > 0 ? (
          filterNotes(notes).length > 0 ? (
            filterNotes(notes).map((note) => <Note key={note.id} note={note} />)
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
