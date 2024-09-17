import { Formik, Form as FormikForm, FormikHelpers } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { FormContainer, FormTitle } from './Form.styles.ts';

interface Props<T extends object> extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  yupValidationSchema: Yup.ObjectSchema<T>;
  initialValues: T;
  handleSubmit: (values: T, actions: FormikHelpers<T>) => void;
}

export const Form = <T extends object>(props: Props<T>) => {
  return (
    <FormContainer>
      {props.title ? <FormTitle>{props.title}</FormTitle> : null}
      <Formik
        initialValues={props.initialValues}
        validationSchema={props.yupValidationSchema}
        onSubmit={props.handleSubmit}
      >
        <FormikForm>{props.children}</FormikForm>
      </Formik>
    </FormContainer>
  );
};
