import { FormikHelpers } from 'formik';
import { useState } from 'react';

import { Button } from '../../../../components/Button';
import {
  Form,
  FormCheckboxField,
  FormSelectField,
  FormTextField,
} from '../../../../components/Form';
import { capitalizeFirstLetterUtil } from '../../../../utilities';
import { useNotes } from '../../providers';
import { FormNoteState } from '../../enums';
import { noteFormValidationSchema } from '../../validation-schema';

type Props = {
  closeForm: () => void;
};

interface FormValues {
  content: string;
  state: FormNoteState;
}

const formInitialValues: FormValues = {
  content: '',
  state: FormNoteState.Active,
};

export const NewNoteForm = ({ closeForm }: Props) => {
  const { addNote, categories } = useNotes();
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);

  const handleCheckboxChange = (categoryName: string) => {
    if (checkedCategories.includes(categoryName)) {
      // category is checked, delete it
      setCheckedCategories(checkedCategories.filter((c) => c !== categoryName));
    } else {
      // new checked category, add it
      setCheckedCategories([...checkedCategories, categoryName]);
    }
  };

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    addNote({
      content: values.content,
      active: values.state === FormNoteState.Active,
      categories: [...checkedCategories],
    });

    actions.resetForm();
    closeForm();
  };

  return (
    <Form
      title="Create note!"
      initialValues={formInitialValues}
      yupValidationSchema={noteFormValidationSchema}
      handleSubmit={handleSubmit}
    >
      <FormTextField label="Note content " fieldName="content" />
      <FormSelectField
        label={'Note state '}
        fieldName={'state'}
        options={[
          { label: 'Archived', value: FormNoteState.Archived },
          { label: 'Active', value: FormNoteState.Active },
        ]}
      />
      {categories.map((category) => (
        <FormCheckboxField
          key={category}
          label={capitalizeFirstLetterUtil(category)}
          checkboxName={category}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
      <Button type="submit" fontSize="small">
        Create
      </Button>
    </Form>
  );
};
