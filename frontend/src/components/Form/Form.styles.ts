import { styled } from 'styled-components';

export const FormContainer = styled.div``;

export const FormTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const FormFieldLabel = styled.div<{ fontSize?: string }>`
  font-size: ${(props) => {
    if (props.fontSize) return props.theme.fontSizes[props.fontSize];
    return props.theme.fontSizes.small;
  }};
`;
