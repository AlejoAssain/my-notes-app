import { CreateCategoryDto } from '../dto';

export const INITIAL_CATEGORIES: CreateCategoryDto[] = [
  { id: 1, name: 'work', description: 'Notes related with work' },
  {
    id: 2,
    name: 'personal',
    description: 'Notes related with personal development',
  },
  { id: 3, name: 'study', description: 'Notes related with study' },
  {
    id: 4,
    name: 'hobbies',
    description: 'Notes related with hobbies in general',
  },
];
