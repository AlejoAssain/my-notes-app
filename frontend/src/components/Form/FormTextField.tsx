import { Field } from 'formik';
import React from 'react';
import { FontSize } from '../../themes';
import { FormFieldError } from './FormFieldError.tsx';

import { FormTextFieldContainer, FormTextFieldInput, FormTextFieldLabel } from './FormTextField.styles.ts';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fontSize?: FontSize;
  fieldName: string;
}

export const FormTextField: React.FC<Props> = (
  {label, fieldName, fontSize, ...props}: Props
) => {
  return (
    <FormTextFieldContainer>
      <FormTextFieldLabel
        fontSize={fontSize}
      >
        {label}
      </FormTextFieldLabel>
      <Field
        as={FormTextFieldInput}
        name={fieldName}
        fontSize={fontSize}
        {...props}
      />
      <FormFieldError fieldName={fieldName}/>
    </FormTextFieldContainer>
  );
};
