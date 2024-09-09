import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Category } from 'src/modules/categories/entities';
import { User } from 'src/modules/users/entities';

@Entity()
export class Note {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  content: string;

  @Column()
  active: boolean;

  @ManyToMany(() => Category, (category) => category.notes)
  categories: Category[];

  @ManyToOne(() => User, (user) => user.notes)
  user: User;
}
