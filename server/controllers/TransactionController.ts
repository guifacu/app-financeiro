import { Request, Response } from 'express';
import { TransactionService } from '../services/TransactionService';

export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  async create(request: Request, response: Response) {
    const { body } = request;
    const transaction = await this.transactionService.create(body);
    return response.status(201).json(transaction);
  }

  async findAll(request: Request, response: Response) {
    const transactions = await this.transactionService.findAll();
    return response.json(transactions);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;
    const transaction = await this.transactionService.findById(id);
    return response.json(transaction);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { body } = request;
    const transaction = await this.transactionService.update(id, body);
    return response.json(transaction);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    await this.transactionService.delete(id);
    return response.status(204).send();
  }
} 