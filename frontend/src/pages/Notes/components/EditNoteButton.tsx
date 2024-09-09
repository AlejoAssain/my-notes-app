import {CiEdit} from 'react-icons/ci';

import {NoteButtonContainer} from '#notes/components/styled-components/index.ts';


type Props = {
  toggleEdit: () => void;
}

export const EditNoteButton = ({toggleEdit}: Props) => {
  return (
    <NoteButtonContainer 
      onClick={toggleEdit}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <CiEdit size="25px" />
    </NoteButtonContainer>
  )
}