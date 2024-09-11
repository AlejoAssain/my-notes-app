import { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Form, FormTextField } from '../../../components/Form';

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
    <Form
      title='Login!'
      initialValues={initialValues}
      yupValidationSchema={validationSchema}
      handleSubmit={handleSubmit}
    >
      <FormTextField label='Username:' fieldName='username' fontSize='normal'/>
      <FormTextField label='Password:' fieldName='password' type='password' fontSize='normal'/>
      <Button type="submit">Log in</Button>
    </Form>
  );
};
