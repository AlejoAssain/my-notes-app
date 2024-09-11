import styled from 'styled-components';

export const ControlButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 50px;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

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

export const NotesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 100px;
`;

export const NoteStateContainer = styled.a<{ $active: boolean }>`
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.stateActive : theme.colors.stateArchived};
  color: ${({ theme }) => theme.colors.secondaryText };
  padding: 0 5px;
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

export const EditNoteFormFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  a {
    margin: 0px 5px;
  }
`;

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
  border: 1px solid ${({theme}) => theme.primary};
  border-radius: 5px;
  padding: 2px;
  margin: 2px;
`;

export const NewNoteFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    padding: 0 20px 20px;
  }
`;
export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  div {
    margin: 0 20px;
  }
`;
