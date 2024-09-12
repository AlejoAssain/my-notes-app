import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from './entities';
import { INITIAL_CATEGORIES } from './constants/categories.constants';
import { CategoryNotFoundException } from './exceptions';

@Injectable()
export class CategoriesService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async onApplicationBootstrap() {
    await this.createCategories();
  }

  filterCategories(categories: Category[]) {
    return categories.map((c) => c.name);
  }

  async findAll() {
    return {
      categories: this.filterCategories(await this.categoryRepository.find()),
    };
  }

  async findCategoryByName(categoryName: string) {
    const category = await this.categoryRepository.findOneBy({
      name: categoryName,
    });

    if (!category) throw new CategoryNotFoundException(categoryName);

    return category;
  }

  async createCategories() {
    for (const category of INITIAL_CATEGORIES) {
      const existingCategory = await this.categoryRepository.findOneBy({
        id: category.id,
      });
      if (!existingCategory) {
        const newCategory = this.categoryRepository.create({
          id: category.id,
          name: category.name,
          description: category.description,
        });
        await this.categoryRepository.save(newCategory);
        console.log(`Category '${newCategory.name}' created`);
      } else {
        console.log(`Category '${category.name}' already exists`);
      }
    }
  }
}
