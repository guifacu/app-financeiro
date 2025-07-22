import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof ZodError) {
    return response.status(400).json({
      message: 'Erro de validação',
      errors: error.errors,
    });
  }

  console.error(error);

  return response.status(500).json({
    message: 'Erro interno do servidor',
  });
} 