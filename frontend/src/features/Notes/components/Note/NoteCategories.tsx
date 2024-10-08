import { capitalizeFirstLetterUtil } from '../../../../utilities';
import {
  NoteCategoriesContainer,
  NoteCategoryContainer,
} from './NoteCategories.styles.ts';

type Props = {
  categories: string[];
};

export const NoteCategories = ({ categories }: Props) => {
  return (
    <NoteCategoriesContainer>
      {categories.map((category) => (
        <NoteCategoryContainer key={category}>
          {capitalizeFirstLetterUtil(category)}
        </NoteCategoryContainer>
      ))}
    </NoteCategoriesContainer>
  );
};
