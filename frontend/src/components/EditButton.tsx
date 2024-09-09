import {CiEdit} from 'react-icons/ci';

import {ButtonContainer} from '#components/styled-components/containers.ts';


type Props = {
  toggleEdit: () => void;
}

export const EditButton = ({toggleEdit}: Props) => {
  return (
    <ButtonContainer onClick={toggleEdit}>
      <CiEdit size="25px" />
    </ButtonContainer>
  )
}