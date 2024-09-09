import { capitalizeFirstLetterUtil } from '#utilities/index.ts'

import { NoteCategoriesContainer, NoteCategoryContainer} from '#notes/components/styled-components/index.ts';

type Props = {
  categories: string[]
}

export const NoteCategories = ({categories}: Props) => {
  return (
    <NoteCategoriesContainer>
      { categories.map(category => (
        <NoteCategoryContainer key={category}>
          {capitalizeFirstLetterUtil(category)}
        </NoteCategoryContainer>
      ))}
    </NoteCategoriesContainer>
  )
}