import { BadRequestException } from '@nestjs/common';

export class CategoryNotFoundException extends BadRequestException {
  constructor(categoryName?: string) {
    super(
      categoryName
        ? `Category '${categoryName}' does not exists!`
        : 'Category does not exists',
    );
  }
}
