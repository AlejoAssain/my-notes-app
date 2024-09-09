import { ModalButton, ModalContainer, ModalWrapper } from './styled-components';

type Props = {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, close, children }: Props) => {
  return !isOpen ? null : (
    <ModalContainer>
      <ModalWrapper>
        <ModalButton
          onClick={close}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          &times;
        </ModalButton>
        {children}
      </ModalWrapper>
    </ModalContainer>
  );
};
