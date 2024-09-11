import { styled } from 'styled-components';

export const FormTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const FormTextFieldLabel = styled
  .div<{fontSize?: string}>`
  font-size: ${(props) => {
    if (props.fontSize) return props.theme.fontSizes[props.fontSize];
    return props.theme.fontSizes.small
  }};
`;


export const FormTextFieldInput = styled
  .input<{ fontSize?: string }>`
  background-color: ${({ theme }) => theme.colors.lighterBackground};
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: ${(props) => {
    if (props.fontSize) return props.theme.fontSizes[props.fontSize];
    return props.theme.fontSizes.small
  }};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: #888;
  }

  &:focus {
    outline: none;
    border-color: #007BFF;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }
`;

