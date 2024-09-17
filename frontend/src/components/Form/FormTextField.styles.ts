import { styled } from 'styled-components';

export const FormTextFieldInput = styled.input<{ fontSize?: string }>`
  background-color: ${({ theme }) => theme.colors.lighterBackground};
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${(props) => {
    if (props.fontSize) return props.theme.fontSizes[props.fontSize];
    return props.theme.fontSizes.small;
  }};
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    border-color: #888;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }
`;
