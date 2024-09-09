import { useState } from 'react';

import { NoteModel } from '#models/index.ts';
import { EditButton } from '#components/index.ts';
import {
  NoteContainer,
  NoteHeaderContainer,
} from '#notes/components/styled-components/index.ts';
import { NoteState } from '#notes/components/index.ts';
import { EditNoteForm } from '#notes/components/EditNoteForm.tsx';
import { NoteCategories } from './NoteCategories';

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
            <EditButton toggleEdit={toggleEdit} />
          </NoteHeaderContainer>
          <NoteCategories categories={note.categories} />
          <NoteState active={note.active} />
        </>
      )}
    </NoteContainer>
  );
};
