import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { Note } from './entities';
import { CategoriesModule } from '../categories/categories.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Note]), CategoriesModule, UsersModule],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
