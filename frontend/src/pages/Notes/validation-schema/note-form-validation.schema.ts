import * as Yup from 'yup';

export const noteFormValidationSchema = Yup.object().shape({
  content: Yup.string()
    .min(4, 'Note is too short')
    .required('Note content is required'),
  state: Yup.string().required('Note state is required'),
  categories: Yup.array()
});
