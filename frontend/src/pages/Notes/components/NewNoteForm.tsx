import { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';

import {
  SelectFormField,
  SubmitButton,
  TextFormField,
  FormTitle
} from '#components/index.ts';
import { useNotes } from '#notes/contexts/NotesContext.tsx';
import { FormNoteState } from '#notes/enums/index.ts';
import { noteFormValidationSchema } from '#notes/validation-schema/index.ts';
import { capitalizeFirstLetterUtil } from '#utilities/index.ts';
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
          <SubmitButton text={'Create'} />
        </Form>
      </Formik>
    </NewNoteFormContainer>
  );
};
