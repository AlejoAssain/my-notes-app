import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { LoginFormFieldContainer } from './styled-components';
import { useSession } from '../../../contexts';
import { Button } from '../../../components/Button';

interface FormValues {
  username: string;
  password: string;
}

const initialValues: FormValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(2, 'Username must be at least 2 characters'),
  password: Yup.string().required('Password is required'),
});

export const LoginForm = () => {
  const { loginUser } = useSession();
  
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    loginUser(values.username, values.password);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <LoginFormFieldContainer>
          <label htmlFor="username">Username</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage name="username" component="div" />
        </LoginFormFieldContainer>
        <LoginFormFieldContainer>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </LoginFormFieldContainer>
        <Button type='submit'>Log in</Button>
      </Form>
    </Formik>
  );
};
