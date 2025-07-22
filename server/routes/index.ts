import { Router } from 'express';
import { categoriesRouter } from './categories.routes';
import { banksRouter } from './banks.routes';
import { transactionsRouter } from './transactions.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/banks', banksRouter);
router.use('/transactions', transactionsRouter);

export { router }; 