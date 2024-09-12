import { ApiProperty } from '@nestjs/swagger';

export class CategoriesResponseDto {
  @ApiProperty({ example: { categories: ['work', 'study'] } })
  categories: string[];
}
