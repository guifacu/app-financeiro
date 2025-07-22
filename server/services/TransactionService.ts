import { Transaction, transactionSchema } from '../entities/Transaction';
import { TransactionRepository } from '../repositories/TransactionRepository';
import { CategoryService } from './CategoryService';
import { BankService } from './BankService';

export class TransactionService {
  constructor(
    private transactionRepository: TransactionRepository,
    private categoryService: CategoryService,
    private bankService: BankService
  ) {}

  async create(data: Transaction) {
    const validatedData = transactionSchema.parse(data);
    
    // Verifica se categoria e banco existem
    await this.categoryService.findById(validatedData.categoryId);
    await this.bankService.findById(validatedData.bankId);

    const transaction = await this.transactionRepository.create(validatedData);
    return transaction;
  }

  async findAll() {
    const transactions = await this.transactionRepository.findAll();
    return transactions;
  }

  async findById(id: string) {
    const transaction = await this.transactionRepository.findById(id);
    if (!transaction) {
      throw new Error('Transação não encontrada');
    }
    return transaction;
  }

  async update(id: string, data: Transaction) {
    await this.findById(id);
    const validatedData = transactionSchema.parse(data);
    
    // Verifica se categoria e banco existem
    await this.categoryService.findById(validatedData.categoryId);
    await this.bankService.findById(validatedData.bankId);

    const transaction = await this.transactionRepository.update(id, validatedData);
    return transaction;
  }

  async delete(id: string) {
    await this.findById(id);
    await this.transactionRepository.delete(id);
  }
} 