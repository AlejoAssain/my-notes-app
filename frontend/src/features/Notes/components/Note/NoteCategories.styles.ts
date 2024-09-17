import styled from 'styled-components';

export const NoteCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  a {
    align-self: flex-start;
  }
`;

export const NoteCategoryContainer = styled.a`
  background-color: ${({ theme }) => theme.tertiary};
  font-size: 17px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  padding: 2px;
  margin: 2px;
`;
