import * as Yup from 'yup';

import { FormNoteState } from '../enums';

export const noteFormValidationSchema = Yup.object().shape({
  content: Yup.string()
    .min(4, 'Note is too short')
    .required('Note content is required'),
  state: Yup.mixed<FormNoteState>()
    .oneOf(Object.values(FormNoteState))
    .required('Note state is required'),
});
