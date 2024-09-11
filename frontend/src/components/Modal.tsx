import { Button } from './Button';
import { ModalContainer, ModalWrapper } from './styled-components';

type Props = {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, close, children }: Props) => {
  return !isOpen ? null : (
    <ModalContainer>
      <ModalWrapper>
        <Button color='warning' onClick={() => close()}>
          &times;
        </Button>
        {children}
      </ModalWrapper>
    </ModalContainer>
  );
};
