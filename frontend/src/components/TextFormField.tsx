import {ErrorMessage, Field} from 'formik';


type Props = {
  label: string;
  fieldName: string;
}

export const TextFormField = (props: Props) => {
  return (
    <div>
      <label>{props.label}</label>
      <Field name={props.fieldName} />
      <ErrorMessage name={props.fieldName} />
    </div>
  )
}