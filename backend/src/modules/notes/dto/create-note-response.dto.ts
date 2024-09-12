import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteResponseDto {
  @ApiProperty({
    description: 'Note id',
    example: 123,
  })
  id: number;

  @ApiProperty({
    description: 'Note active status',
    example: true,
  })
  active: boolean;

  @ApiProperty({
    description: 'Note content',
    example: 'This is the note content!',
  })
  content: string;

  @ApiProperty({
    description: 'Categories related to the note',
    example: ['work', 'study'],
  })
  categories: string[];
}
