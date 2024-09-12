import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
import { NoteNotFoundException } from './exceptions';
import { CategoriesService } from '../categories/categories.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
    private readonly categoriesService: CategoriesService,
    private readonly usersService: UsersService,
  ) {}

  filterNote(note: Note) {
    return {
      id: note.id,
      active: note.active,
      content: note.content,
      categories: note.categories
        ? this.categoriesService.filterCategories(note.categories)
        : [],
    };
  }

  async assignCategoriesToNote(categoryNames: string[], note: Note) {
    const newCategories = [];
    for (const categoryName of categoryNames) {
      const category =
        await this.categoriesService.findCategoryByName(categoryName);
      newCategories.push(category);
    }

    note.categories = newCategories;

    return note;
  }

  async findNoteById(noteId: number, username: string) {
    const user = await this.usersService.getUserByUsername(username);
    const note = await this.noteRepository.findOne({
      where: { id: noteId, user: user },
      relations: ['categories', 'user'],
    });
    if (!note) throw new NoteNotFoundException(noteId);

    return note;
  }

  async create(createNoteDto: CreateNoteDto, username: string) {
    const user = await this.usersService.getUserByUsername(username);
    let note = this.noteRepository.create();
    note.content = createNoteDto.content;
    note.active = createNoteDto.active;
    note.user = user;
    note.categories = [];
    if (createNoteDto.categories) {
      note = await this.assignCategoriesToNote(createNoteDto.categories, note);
    }

    try {
      return this.filterNote(await this.noteRepository.save(note));
    } catch (e) {
      throw new InternalServerErrorException('Internal server error');
    }
  }

  async findAll(username: string) {
    const user = await this.usersService.getUserByUsername(username);
    const notes = await this.noteRepository.find({
      relations: ['categories', 'user'],
      where: { user: user },
    });
    return notes.map((n) => this.filterNote(n));
  }

  async update(noteId: number, updateNoteDto: UpdateNoteDto, username: string) {
    let note = await this.findNoteById(noteId, username);

    for (const key in updateNoteDto) {
      if (key === 'categories') {
        if (!note[key]) note[key] = [];
        note = await this.assignCategoriesToNote(updateNoteDto[key], note);
      } else {
        note[key] = updateNoteDto[key];
      }
    }

    try {
      await this.noteRepository.save(note);
    } catch (e) {
      throw new InternalServerErrorException('Internal server error!');
    }

    return this.filterNote(note);
  }

  async remove(noteId: number, username: string) {
    const note = await this.findNoteById(noteId, username);

    try {
      this.noteRepository.remove(note);
    } catch (e) {
      throw new InternalServerErrorException('Internal server error!');
    }

    return this.filterNote(note);
  }
}
