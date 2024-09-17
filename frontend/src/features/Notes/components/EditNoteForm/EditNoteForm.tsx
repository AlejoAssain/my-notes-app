import { FormikHelpers } from 'formik';
import { useState } from 'react';

import { Button } from '../../../../components/Button';
import {
  Form,
  FormCheckboxField,
  FormSelectField,
  FormTextField,
} from '../../../../components/Form';
import { TrashIcon } from '../../../../components/Icons';
import { NoteModel } from '../../../../models';
import { capitalizeFirstLetterUtil } from '../../../../utilities';
import { useNotes } from '../../contexts';
import { FormNoteState } from '../../enums';
import { noteFormValidationSchema } from '../../validation-schema';
import { EditNoteButtonContainer } from './EditNoteForm.styles.ts';

type Props = {
  note: NoteModel;
  toggleEdit: () => void;
};

interface FormValues {
  content: string;
  state: FormNoteState;
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
    <Form
      title="Edit Note!"
      yupValidationSchema={noteFormValidationSchema}
      initialValues={formInitialValues}
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
          checked={checkedCategories.includes(category)}
          label={capitalizeFirstLetterUtil(category)}
          checkboxName={category}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
      <EditNoteButtonContainer>
        <Button type="submit" fontSize="small">
          Update note
        </Button>
        <Button color="warning" fontSize="small" onClick={() => handleRemove()}>
          <TrashIcon />
        </Button>
      </EditNoteButtonContainer>
    </Form>
  );
};
