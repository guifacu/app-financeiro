import { Bank } from '../entities/Bank';
import { prisma } from './prisma';

export class BankRepository {
  async create(data: Bank) {
    const bank = await prisma.bank.create({
      data
    });
    return bank;
  }

  async findAll() {
    const banks = await prisma.bank.findMany({
      orderBy: {
        name: 'asc'
      }
    });
    return banks;
  }

  async findById(id: string) {
    const bank = await prisma.bank.findUnique({
      where: { id }
    });
    return bank;
  }

  async update(id: string, data: Bank) {
    const bank = await prisma.bank.update({
      where: { id },
      data
    });
    return bank;
  }

  async delete(id: string) {
    await prisma.bank.delete({
      where: { id }
    });
  }
} 