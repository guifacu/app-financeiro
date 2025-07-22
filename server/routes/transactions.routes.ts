import { Router } from 'express';
import { TransactionController } from '../controllers/TransactionController';
import { TransactionService } from '../services/TransactionService';
import { TransactionRepository } from '../repositories/TransactionRepository';
import { CategoryService } from '../services/CategoryService';
import { BankService } from '../services/BankService';
import { CategoryRepository } from '../repositories/CategoryRepository';
import { BankRepository } from '../repositories/BankRepository';

const transactionsRouter = Router();

const transactionRepository = new TransactionRepository();
const categoryRepository = new CategoryRepository();
const bankRepository = new BankRepository();

const categoryService = new CategoryService(categoryRepository);
const bankService = new BankService(bankRepository);
const transactionService = new TransactionService(
  transactionRepository,
  categoryService,
  bankService
);

const transactionController = new TransactionController(transactionService);

transactionsRouter.post('/', (req, res) => transactionController.create(req, res));
transactionsRouter.get('/', (req, res) => transactionController.findAll(req, res));
transactionsRouter.get('/:id', (req, res) => transactionController.findById(req, res));
transactionsRouter.patch('/:id', (req, res) => transactionController.update(req, res));
transactionsRouter.delete('/:id', (req, res) => transactionController.delete(req, res));

export { transactionsRouter }; 