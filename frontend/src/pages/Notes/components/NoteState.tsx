import {NoteStateContainer} from '#notes/components/styled-components/index.ts';

type Props = {
  active: boolean;
}

export const NoteState = ({active}: Props) => {
  return (
    <NoteStateContainer $active={active}>
      {active ? 'Active' : 'Archived'}
    </NoteStateContainer>
  )
}