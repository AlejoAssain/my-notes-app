import { AddButtonContainer } from './styled-components';

type Props = {
  toggleHidden: () => void;
  formHidden: boolean;
};

export const AddNoteButton = ({ toggleHidden, formHidden }: Props) => {
  return (
    <AddButtonContainer 
      onClick={toggleHidden}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9}}
      $formHidden={formHidden}
    >
      { formHidden ? 'Add note' : 'Cancel'}
    </AddButtonContainer>
  );
};
