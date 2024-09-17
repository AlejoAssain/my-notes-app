import { NoteStateContainer } from './NoteState.styles.ts';

type Props = {
  active: boolean;
};

export const NoteState = ({ active }: Props) => {
  return (
    <NoteStateContainer $active={active}>
      {active ? 'Active' : 'Archived'}
    </NoteStateContainer>
  );
};
