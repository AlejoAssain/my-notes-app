import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Note } from 'src/modules/notes/entities';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToMany(() => Note, note => note.user)
  notes: Note[];
}
