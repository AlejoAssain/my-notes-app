import { NoteStatusFilter } from './Notes';

type Props = {
  label: string;
  changeStatusFilter: (newStatus: NoteStatusFilter) => void;
}

export const StatusFilterSelection = ({changeStatusFilter, label}: Props) => {
  return (
    <div>
      <label>{label} </label>
      <select onChange={(e) => changeStatusFilter(e.target.value as NoteStatusFilter)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="archived">Archived</option>
      </select>
    </div>
    
  )
}