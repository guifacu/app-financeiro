import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criar categorias
  const alimentacao = await prisma.category.create({
    data: {
      name: 'Alimentação',
      icon: 'Utensils'
    }
  });

  const transporte = await prisma.category.create({
    data: {
      name: 'Transporte',
      icon: 'Car'
    }
  });

  // Criar bancos
  const nubank = await prisma.bank.create({
    data: {
      name: 'Nubank',
      code: '260'
    }
  });

  const itau = await prisma.bank.create({
    data: {
      name: 'Itaú',
      code: '341'
    }
  });

  // Criar transações
  await prisma.transaction.create({
    data: {
      description: 'Almoço',
      amount: 50.00,
      type: 'debit',
      date: new Date('2024-03-16'),
      categoryId: alimentacao.id,
      bankId: nubank.id
    }
  });

  await prisma.transaction.create({
    data: {
      description: 'Uber',
      amount: 25.00,
      type: 'debit',
      date: new Date('2024-03-16'),
      categoryId: transporte.id,
      bankId: itau.id
    }
  });

  console.log('Dados de exemplo criados com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 