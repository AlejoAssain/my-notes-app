import { Field } from 'formik';
import React from 'react';

import { FormFieldContainer, FormFieldLabel } from './Form.styles.ts';
import { FormFieldError } from './FormFieldError.tsx';
import { FormSelect, FormSelectOption } from './FormSelectField.styles.ts';

interface Option {
  label: string;
  value: string;
}

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  fieldName: string;
  options: Option[];
}

export const FormSelectField = ({
  fieldName,
  label,
  options,
  ...props
}: Props) => {
  return (
    <FormFieldContainer>
      <FormFieldLabel>{label}</FormFieldLabel>
      <Field as={FormSelect} name={fieldName} {...props}>
        {options.map((option, i) => (
          <FormSelectOption key={i} value={option.value}>
            {option.label}
          </FormSelectOption>
        ))}
      </Field>
      <FormFieldError fieldName={fieldName} />
    </FormFieldContainer>
  );
};
