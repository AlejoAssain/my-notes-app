import styled from 'styled-components';

export const NoteStateContainer = styled.a<{ $active: boolean }>`
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.stateActive : theme.colors.stateArchived};
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 0 5px;
`;
