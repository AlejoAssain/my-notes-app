import React from 'react';

import { FormFieldContainer, FormFieldLabel } from './Form.styles.ts';
import { FormSelect, FormSelectOption } from './FormSelectField.styles.ts';

interface Option {
  label: string;
  value: string;
}

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
}

export const OutsideFormSelectField = ({ label, options, ...props }: Props) => {
  return (
    <FormFieldContainer>
      <FormFieldLabel>{label}</FormFieldLabel>
      <FormSelect {...props}>
        {options.map((option, i) => (
          <FormSelectOption key={i} value={option.value}>
            {option.label}
          </FormSelectOption>
        ))}
      </FormSelect>
    </FormFieldContainer>
  );
};
