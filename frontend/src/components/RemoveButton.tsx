import {CiTrash} from 'react-icons/ci';
import {ButtonContainer} from '#components/styled-components/containers.ts';


type Props = {
  removeItem: () => void;
}

export const RemoveButton = ({removeItem}: Props) => {
  return (
    <ButtonContainer onClick={removeItem} style={{cursor: 'pointer', color: '#f00'}}>
      <CiTrash size="25px"/>
    </ButtonContainer>
  )
}