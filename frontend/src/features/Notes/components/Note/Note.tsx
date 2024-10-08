import { useState } from 'react';

import { Button } from '../../../../components/Button';
import { EditIcon } from '../../../../components/Icons';
import { NoteModel } from '../../../../models';
import { EditNoteForm } from '../EditNoteForm';
import { NoteCategories } from './NoteCategories';
import { NoteState } from './NoteState';
import { NoteContainer, NoteHeaderContainer } from './Note.styles';

type Props = {
  note: NoteModel;
};

export const Note = ({ note }: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleEdit = () => setIsEditing(!isEditing);

  return (
    <NoteContainer>
      {isEditing ? (
        <EditNoteForm note={note} toggleEdit={toggleEdit} />
      ) : (
        <>
          <NoteHeaderContainer>
            <h4>{note.content}</h4>
            <Button onClick={() => toggleEdit()}>
              <EditIcon />
            </Button>
          </NoteHeaderContainer>
          <NoteCategories categories={note.categories} />
          <NoteState active={note.active} />
        </>
      )}
    </NoteContainer>
  );
};
