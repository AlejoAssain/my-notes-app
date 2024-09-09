import { Note } from 'src/modules/notes/entities';
import { Column, Entity, ManyToMany, PrimaryColumn, JoinTable } from 'typeorm';

@Entity()
export class Category {
  @PrimaryColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @ManyToMany(() => Note, note => note.categories, {cascade: true})
  @JoinTable()
  notes: Note[]
}
