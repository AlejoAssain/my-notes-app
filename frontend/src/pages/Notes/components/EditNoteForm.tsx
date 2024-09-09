import { Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';

import { FormNoteState } from '#notes/enums/index.ts';
import { NoteModel } from '#models/index.ts';
import { useNotes } from '#notes/contexts/NotesContext.tsx';
import {
  SelectFormField,
  SubmitButton,
  TextFormField,
  RemoveButton,
} from '#components/index.ts';
import { noteFormValidationSchema } from '#notes/validation-schema/index.ts';
import { EditNoteFormFooter } from '#notes/components/styled-components/index.ts';
import { capitalizeFirstLetterUtil } from '#utilities/index.js';

type Props = {
  note: NoteModel;
  toggleEdit: () => void;
};

interface FormValues {
  content: string;
  state: FormNoteState;
  categories: string[];
}

export const EditNoteForm = ({ note, toggleEdit }: Props) => {
  const { editNote, removeNote, categories } = useNotes();
  const [checkedCategories, setCheckedCategories] = useState<string[]>(
    note.categories,
  );

  const handleCheckboxChange = (categoryName: string) => {
    if (checkedCategories.includes(categoryName)) {
      // category is checked, delete it
      setCheckedCategories(checkedCategories.filter((c) => c !== categoryName));
    } else {
      // new checked category, add it
      setCheckedCategories([...checkedCategories, categoryName]);
    }
  };

  const formInitialValues: FormValues = {
    content: note.content,
    state: note.active ? FormNoteState.Active : FormNoteState.Archived,
    categories: note.categories,
  };

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    editNote({
      id: note.id,
      content: values.content,
      active: values.state === FormNoteState.Active,
      categories: checkedCategories,
    });

    actions.resetForm();
    toggleEdit();
  };

  const handleRemove = () => {
    removeNote(note.id);
  };

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleSubmit}
      validationSchema={noteFormValidationSchema}
    >
      <Form>
        <TextFormField label={'Note content'} fieldName={'content'} />
        <SelectFormField
          label={'Note state'}
          fieldName={'state'}
          options={[
            { label: 'Archived', value: FormNoteState.Archived },
            { label: 'Active', value: FormNoteState.Active },
          ]}
        />
        {categories.map((category) => (
          <div style={{ display: 'flex' }} key={category}>
            {capitalizeFirstLetterUtil(category)}
            <input
              checked={checkedCategories.includes(category)}
              type="checkbox"
              onChange={() => handleCheckboxChange(category)}
            />
          </div>
        ))}
        <EditNoteFormFooter>
          <SubmitButton text={'Update note'} />
          <RemoveButton removeItem={handleRemove} />
        </EditNoteFormFooter>
      </Form>
    </Formik>
  );
};
