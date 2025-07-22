import { Request, Response } from 'express';
import { BankService } from '../services/BankService';

export class BankController {
  constructor(private bankService: BankService) {}

  async create(request: Request, response: Response) {
    const { body } = request;
    const bank = await this.bankService.create(body);
    return response.status(201).json(bank);
  }

  async findAll(request: Request, response: Response) {
    const banks = await this.bankService.findAll();
    return response.json(banks);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.params;
    const bank = await this.bankService.findById(id);
    return response.json(bank);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { body } = request;
    const bank = await this.bankService.update(id, body);
    return response.json(bank);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    await this.bankService.delete(id);
    return response.status(204).send();
  }
} 