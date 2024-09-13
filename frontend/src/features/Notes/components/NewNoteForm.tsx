import { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';

import { FormTitle, SelectFormField, TextFormField } from '../../../components';
import { Button } from '../../../components/Button';
import { capitalizeFirstLetterUtil } from '../../../utilities';
import { useNotes } from '../contexts';
import { FormNoteState } from '../enums';
import { noteFormValidationSchema } from '../validation-schema';
import { NewNoteFormContainer } from './styled-components';

type Props = {
  closeForm: () => void;
}

interface FormValues {
  content: string;
  state: FormNoteState;
}

const formInitialValues: FormValues = {
  content: '',
  state: FormNoteState.Active,
};

export const NewNoteForm = ({closeForm}: Props) => {
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
      categories: [...checkedCategories]
    });

    actions.resetForm();
    closeForm();
  };

  return (
    <NewNoteFormContainer>
      <Formik
        initialValues={formInitialValues}
        onSubmit={handleSubmit}
        validationSchema={noteFormValidationSchema}
      >
        <Form>
          <FormTitle title='Create note!'/> 
          <TextFormField label={'Note content '} fieldName={'content'} />
          <SelectFormField
            label={'Note state '}
            fieldName={'state'}
            options={[
              { label: 'Archived', value: FormNoteState.Archived },
              { label: 'Active', value: FormNoteState.Active },
            ]}
          />
          {categories.map((category) => (
            <div style={{ display: 'flex' }} key={category}>
              {capitalizeFirstLetterUtil(category)}
              <input type="checkbox" onChange={() => handleCheckboxChange(category)} />
            </div>
          ))}  
          <Button type='submit' fontSize='small' >Create</Button>
        </Form>
      </Formik>
    </NewNoteFormContainer>
  );
};
