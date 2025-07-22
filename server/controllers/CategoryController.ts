import { Request, Response } from 'express';
import { CategoryService } from '../services/CategoryService';

export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  async create(request: Request, response: Response) {
    const { body } = request;
    const category = await this.categoryService.create(body);
    return response.status(201).json(category);
  }

  async findAll(request: Request, response: Response) {
    const categories = await this.categoryService.findAll();
    return response.json(categories);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;
    const category = await this.categoryService.findById(id);
    return response.json(category);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { body } = request;
    const category = await this.categoryService.update(id, body);
    return response.json(category);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    await this.categoryService.delete(id);
    return response.status(204).send();
  }
} 