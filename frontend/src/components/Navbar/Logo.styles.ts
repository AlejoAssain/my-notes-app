import { styled } from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.normal};
  font-weight: bolder;
  cursor: pointer;
`;
