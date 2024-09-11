import { ErrorMessage } from 'formik';
import React from 'react';

import { FormFieldErrorContainer } from './FormFieldError.styles.ts';

interface Props {
  fieldName: string;
}

export const FormFieldError: React.FC<Props> = (props) => {
  return (
    <FormFieldErrorContainer>
      <ErrorMessage name={props.fieldName} component='div'/>
    </FormFieldErrorContainer>
  );
};
