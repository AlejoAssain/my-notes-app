import { capitalizeFirstLetterUtil } from '../../../utilities';
import { useNotes } from '../contexts';

type Props = {
  label: string;
  changeCategoryFilter: (newStatus: string) => void;
};

export const CategoryFilterSelection = ({
  changeCategoryFilter,
  label,
}: Props) => {
  const { categories } = useNotes();
  return (
    <div>
      <label>{label} </label>
      <select onChange={(e) => changeCategoryFilter(e.target.value as string)}>
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {capitalizeFirstLetterUtil(category)}
          </option>
        ))}
      </select>
    </div>
  );
};
