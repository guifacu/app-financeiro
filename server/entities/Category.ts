import { z } from 'zod';

export const categorySchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, 'Nome é obrigatório'),
  icon: z.string().min(1, 'Ícone é obrigatório'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Category = z.infer<typeof categorySchema>; 