import { Field } from 'formik';
import React from 'react';

import { FontSize } from '../../themes';
import { FormFieldContainer, FormFieldLabel } from './Form.styles.ts';
import { FormFieldError } from './FormFieldError.tsx';
import { FormTextFieldInput } from './FormTextField.styles.ts';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fontSize?: FontSize;
  fieldName: string;
}

export const FormTextField: React.FC<Props> = ({
  label,
  fieldName,
  fontSize,
  ...props
}: Props) => {
  return (
    <FormFieldContainer>
      <FormFieldLabel fontSize={fontSize}>{label}</FormFieldLabel>
      <Field
        as={FormTextFieldInput}
        name={fieldName}
        fontSize={fontSize}
        {...props}
      />
      <FormFieldError fieldName={fieldName} />
    </FormFieldContainer>
  );
};
