import { OutsideFormSelectField } from '../../../../components/Form';
import { capitalizeFirstLetterUtil } from '../../../../utilities';
import { useFilters, useNotes } from '../../providers';
import { NoteStatusFilter } from '../../enums';
import { FiltersContainer } from './Filters.styles.ts';

export const Filters = () => {
  const { changeStatusFilter, changeCategoryFilter } = useFilters();
  const { categories } = useNotes();

  const getStatusFilterOptions = () => {
    return Object.values(NoteStatusFilter).map((status) => {
      return {
        label: capitalizeFirstLetterUtil(status),
        value: status,
      };
    });
  };

  const getCategoryFilterOptions = () => {
    return [
      { label: 'All', value: 'all' },
      ...categories.map((category) => {
        return {
          label: capitalizeFirstLetterUtil(category),
          value: category,
        };
      }),
    ];
  };

  return (
    <FiltersContainer>
      <OutsideFormSelectField
        label={'Filter by status'}
        options={getStatusFilterOptions()}
        onChange={(e) => changeStatusFilter(e.target.value as NoteStatusFilter)}
      />
      <OutsideFormSelectField
        label={'Filter by status'}
        options={getCategoryFilterOptions()}
        onChange={(e) => changeCategoryFilter(e.target.value as string)}
      />
    </FiltersContainer>
  );
};
