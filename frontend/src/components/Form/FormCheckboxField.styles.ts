import { styled } from 'styled-components';
import { FormFieldContainer } from './Form.styles.ts';

export const FormCheckboxFieldContainer = styled(FormFieldContainer)`
  flex-direction: row;
`;

export const FormCheckbox = styled.input.attrs({
  type: 'checkbox',
})``;
