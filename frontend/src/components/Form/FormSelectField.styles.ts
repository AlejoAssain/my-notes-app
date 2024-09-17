import { styled } from 'styled-components';

export const FormSelect = styled.select<{ fontSize?: string }>`
  background-color: ${({ theme }) => theme.colors.lighterBackground};
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${(props) => {
    if (props.fontSize) return props.theme.fontSizes[props.fontSize];
    return props.theme.fontSizes.small;
  }};
  //appearance: none;
  //background-image: url('data:image/svg+xml;base64,...');
  //background-repeat: no-repeat;
  //background-position: right 10px center;
  //background-size: 12px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &:hover {
    border-color: #007bff;
  }
`;

export const FormSelectOption = styled.option<{ fontSize?: string }>`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.lighterBackground};
  font-size: ${(props) => {
    if (props.fontSize) return props.theme.fontSizes[props.fontSize];
    return props.theme.fontSizes.small;
  }};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
