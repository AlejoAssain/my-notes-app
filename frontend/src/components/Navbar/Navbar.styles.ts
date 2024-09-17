import { styled } from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lighterBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  min-height: 60px;
  user-select: none;
  margin-bottom: 30px;

  svg {
    margin-left: 10px;
  }
`;
