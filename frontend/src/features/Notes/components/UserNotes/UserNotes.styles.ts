import styled from 'styled-components';

export const UserNotesHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  min-height: 50px;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

export const NotesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 100px;
`;
