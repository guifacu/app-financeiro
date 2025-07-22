import 'dotenv/config';
import { app } from './app';
import { prisma } from './repositories/prisma';

const port = process.env.PORT || 3333;

async function startServer() {
  try {
    await prisma.$connect();
    console.log('📦 Conectado ao banco de dados');

    app.listen(port, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
  }
}

startServer(); 