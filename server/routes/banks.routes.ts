import { Router } from 'express';
import { BankController } from '../controllers/BankController';
import { BankService } from '../services/BankService';
import { BankRepository } from '../repositories/BankRepository';

const banksRouter = Router();
const bankRepository = new BankRepository();
const bankService = new BankService(bankRepository);
const bankController = new BankController(bankService);

banksRouter.post('/', (req, res) => bankController.create(req, res));
banksRouter.get('/', (req, res) => bankController.findAll(req, res));
banksRouter.get('/:id', (req, res) => bankController.findById(req, res));
banksRouter.patch('/:id', (req, res) => bankController.update(req, res));
banksRouter.delete('/:id', (req, res) => bankController.delete(req, res));

export { banksRouter }; 