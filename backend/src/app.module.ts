import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { NotesModule } from './modules/notes/notes.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    NotesModule,
    CategoriesModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {
  static port: number;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
  }
}
