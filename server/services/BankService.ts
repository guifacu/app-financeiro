import { Bank, bankSchema } from '../entities/Bank';
import { BankRepository } from '../repositories/BankRepository';

export class BankService {
  constructor(private bankRepository: BankRepository) {}

  async create(data: Bank) {
    const validatedData = bankSchema.parse(data);
    const bank = await this.bankRepository.create(validatedData);
    return bank;
  }

  async findAll() {
    const banks = await this.bankRepository.findAll();
    return banks;
  }

  async findById(id: string) {
    const bank = await this.bankRepository.findById(id);
    if (!bank) {
      throw new Error('Banco não encontrado');
    }
    return bank;
  }

  async update(id: string, data: Bank) {
    await this.findById(id);
    const validatedData = bankSchema.parse(data);
    const bank = await this.bankRepository.update(id, validatedData);
    return bank;
  }

  async delete(id: string) {
    await this.findById(id);
    await this.bankRepository.delete(id);
  }
} 