import { Controller, Get } from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Get categories' })
  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }
}
