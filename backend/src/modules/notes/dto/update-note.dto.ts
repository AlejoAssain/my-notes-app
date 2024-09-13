import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateNoteDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Note content',
    example: 'This is the note content!',
    required: false,
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

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    description: 'Note active status',
    example: true,
    required: false,
  })
  active: boolean;
}
