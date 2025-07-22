import { z } from 'zod';

export const bankSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1, 'Nome é obrigatório'),
  code: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Bank = z.infer<typeof bankSchema>; 