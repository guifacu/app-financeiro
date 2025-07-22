import { z } from 'zod';

export const transactionSchema = z.object({
  id: z.string().uuid().optional(),
  description: z.string().min(1, 'Descrição é obrigatória'),
  amount: z.number().min(0.01, 'Valor deve ser maior que zero'),
  type: z.enum(['credit', 'debit'], {
    required_error: 'Tipo deve ser credit ou debit',
  }),
  date: z.string().or(z.date()),
  installments: z.number().optional(),
  currentInstallment: z.number().optional(),
  totalInstallments: z.number().optional(),
  categoryId: z.string().uuid('ID da categoria inválido'),
  bankId: z.string().uuid('ID do banco inválido'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Transaction = z.infer<typeof transactionSchema>; 