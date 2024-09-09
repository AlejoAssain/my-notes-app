import {Field} from 'formik';

interface option {
  label: string;
  value: string;
}

type Props = {
  label: string;
  fieldName: string;
  options: option[];
}

export const SelectFormField = (props: Props) => {
  return (
    <div>
      <label>{props.label}</label>
      <Field as="select" name={props.fieldName}>
        {props.options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
    </div>
  )
}