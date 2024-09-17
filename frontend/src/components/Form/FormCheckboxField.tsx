import React from 'react';
import { FontSize } from '../../themes';

import { FormFieldLabel } from './Form.styles.ts';
import {
  FormCheckbox,
  FormCheckboxFieldContainer,
} from './FormCheckboxField.styles.ts';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  fontSize?: FontSize;
  checkboxName?: string;
  handleCheckboxChange: (checkboxName: string) => void;
}

export const FormCheckboxField: React.FC<Props> = ({
  label,
  handleCheckboxChange,
  fontSize,
  checkboxName,
  ...props
}: Props) => {
  return (
    <FormCheckboxFieldContainer>
      <FormFieldLabel fontSize={fontSize}>{label}</FormFieldLabel>
      <FormCheckbox
        name={checkboxName}
        onChange={
          checkboxName ? () => handleCheckboxChange(checkboxName) : () => {}
        }
        {...props}
      />
    </FormCheckboxFieldContainer>
  );
};
