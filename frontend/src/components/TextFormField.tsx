import { ErrorMessage, Field } from 'formik';
import { FormTextFieldContainer } from './Form/FormTextField.styles.ts';


type Props = {
  label: string;
  fieldName: string;
}

export const TextFormField = (props: Props) => {
  return (
    <FormTextFieldContainer>
      <label>{props.label}</label>
      <Field name={props.fieldName}/>
      <ErrorMessage name={props.fieldName} />
    </FormTextFieldContainer>
  )
}