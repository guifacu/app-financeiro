import { Category, categorySchema } from '../entities/Category';
import { CategoryRepository } from '../repositories/CategoryRepository';

export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async create(data: Category) {
    const validatedData = categorySchema.parse(data);
    const category = await this.categoryRepository.create(validatedData);
    return category;
  }

  async findAll() {
    const categories = await this.categoryRepository.findAll();
    return categories;
  }

  async findById(id: string) {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new Error('Categoria não encontrada');
    }
    return category;
  }

  async update(id: string, data: Category) {
    await this.findById(id);
    const validatedData = categorySchema.parse(data);
    const category = await this.categoryRepository.update(id, validatedData);
    return category;
  }

  async delete(id: string) {
    await this.findById(id);
    await this.categoryRepository.delete(id);
  }
} 