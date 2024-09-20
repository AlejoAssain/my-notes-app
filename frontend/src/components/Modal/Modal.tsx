import React from 'react';
import { MdClose } from 'react-icons/md';

import { CloseModalButton, ModalContainer, ModalWrapper } from './Modal.styles.ts';

type Props = {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, close, children }: Props) => {
  return !isOpen ? null : (
    <ModalContainer>
      <ModalWrapper>
        <CloseModalButton color="warning" onClick={() => close()}>
          <MdClose size='18px' />
        </CloseModalButton>
        {children}
      </ModalWrapper>
    </ModalContainer>
  );
};
