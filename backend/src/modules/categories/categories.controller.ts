import { Controller, Get } from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriesResponseDto } from './dto';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: 'Get categories' })
  @ApiResponse({
    status: 200,
    description: 'Get all categories',
    type: CategoriesResponseDto,
  })
  findAll() {
    return this.categoriesService.findAll();
  }
}
