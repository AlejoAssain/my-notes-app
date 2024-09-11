import { styled } from 'styled-components';

export const FormFieldErrorContainer = styled.div`
  color: ${(props) => props.theme.colors.warning};
  font-size: ${(props) => props.theme.fontSizes.small};
  min-height: 35px;
`;
