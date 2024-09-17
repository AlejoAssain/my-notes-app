import styled from 'styled-components';

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.secondaryText};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  border-radius: 15px;
  min-width: 200px;
  h4 {
    margin: 4px;
  }
  a {
    align-self: flex-end;
  }
`;

export const NoteHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 200px;
  max-width: 350px;
  align-items: center;
  margin-bottom: 10px;
`;
