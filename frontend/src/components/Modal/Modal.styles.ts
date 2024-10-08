import styled from 'styled-components';

import { Button } from '../Button';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
  z-index: 500;
`;

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lighterBackground};
  padding: 30px;
  border-radius: 20px;
`;

export const CloseModalButton = styled(Button)`
  padding: 5px 5px;
  align-self: flex-end;
`;
