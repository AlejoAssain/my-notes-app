import styled from 'styled-components';

export const ButtonContainer = styled.a`
  cursor: pointer;
`

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
`

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.lighterBackground};
  padding: 10px;
  border-radius: 20px;
`

export const NavbarContainer = styled.div`
  background-color: ${({theme}) => theme.colors.lighterBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bolder;
  user-select: none;
  margin-bottom: 30px;
  
  svg {
    margin-left: 10px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const LogoutButton = styled.button`
`