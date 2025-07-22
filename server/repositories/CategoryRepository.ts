import { Category } from '../entities/Category';
import { prisma } from './prisma';

export class CategoryRepository {
  async create(data: Category) {
    const category = await prisma.category.create({
      data
    });
    return category;
  }

  async findAll() {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc'
      }
    });
    return categories;
  }

  async findById(id: string) {
    const category = await prisma.category.findUnique({
      where: { id }
    });
    return category;
  }

  async update(id: string, data: Category) {
    const category = await prisma.category.update({
      where: { id },
      data
    });
    return category;
  }

  async delete(id: string) {
    await prisma.category.delete({
      where: { id }
    });
  }
} 