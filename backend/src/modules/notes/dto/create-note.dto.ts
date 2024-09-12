import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Note content',
    example: 'This is the note content!',
  })
  content: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    description: 'Categories related to the note',
    example: ['work', 'study'],
    required: false,
  })
  categories: string[];

  @IsBoolean()
  @ApiProperty({
    description: 'Note active status',
    example: true,
  })
  active: boolean;
}
