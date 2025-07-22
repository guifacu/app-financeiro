import { Transaction } from '../entities/Transaction';
import { prisma } from './prisma';

export class TransactionRepository {
  async create(data: Transaction) {
    const transaction = await prisma.transaction.create({
      data: {
        ...data,
        date: new Date(data.date)
      },
      include: {
        category: true,
        bank: true
      }
    });
    return transaction;
  }

  async findAll() {
    const transactions = await prisma.transaction.findMany({
      include: {
        category: true,
        bank: true
      },
      orderBy: {
        date: 'desc'
      }
    });
    return transactions;
  }

  async findById(id: string) {
    const transaction = await prisma.transaction.findUnique({
      where: { id },
      include: {
        category: true,
        bank: true
      }
    });
    return transaction;
  }

  async update(id: string, data: Transaction) {
    const transaction = await prisma.transaction.update({
      where: { id },
      data: {
        ...data,
        date: new Date(data.date)
      },
      include: {
        category: true,
        bank: true
      }
    });
    return transaction;
  }

  async delete(id: string) {
    await prisma.transaction.delete({
      where: { id }
    });
  }
} 