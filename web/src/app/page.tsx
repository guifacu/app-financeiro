'use client';
import { PiggyBank, PlusCircle, Lock, Store, Gamepad2, Volleyball } from 'lucide-react';
import { FinancialCard } from '../components/cards/FinancialCard';
import { CategoryItem } from '../components/categories/CategoryItem';
import { TransactionItem } from '../components/transactions/TransactionItem';
import { AnalysisChart } from '../components/analysis/AnalysisChart';
import { FINANCIAL_CARDS } from '../constants';
import { Category, Transaction } from '../types';

// Mock data para categorias
const categories: Category[] = [
  {
    id: '1',
    name: 'Alimentação',
    icon: Lock,
    transactionCount: 10,
    totalAmount: 954.15,
    highlighted: true
  },
  {
    id: '2',
    name: 'Mercado',
    icon: Store,
    transactionCount: 8,
    totalAmount: 508.90
  },
  {
    id: '3',
    name: 'Lazer',
    icon: Gamepad2,
    transactionCount: 5,
    totalAmount: 123.00
  },
  {
    id: '4',
    name: 'Basquete',
    icon: Volleyball,
    transactionCount: 5,
    totalAmount: 679.00
  }
];

// Mock data para transações
const transactions: Transaction[] = [
  {
    id: '1',
    description: 'Playstation',
    type: 'credit',
    amount: 350.00,
    bank: 'Banco do Brasil',
    date: '2024/01/15',
    installments: {
      current: 1,
      total: 4
    }
  },
  {
    id: '2',
    description: 'Mercadinho do Jorjão',
    type: 'debit',
    amount: 200.00,
    bank: 'Nubank',
    date: '2024/01/20'
  },
  {
    id: '3',
    description: 'HBO Max',
    type: 'credit',
    amount: 54.90,
    bank: 'Caixa',
    date: '2024/02/01',
    installments: {
      current: 5,
      total: 12
    }
  },
  {
    id: '4',
    description: 'Supermercado',
    type: 'debit',
    amount: 432.50,
    bank: 'Nubank',
    date: '2024/02/05'
  },
  {
    id: '5',
    description: 'Academia',
    type: 'credit',
    amount: 89.90,
    bank: 'Banco do Brasil',
    date: '2024/02/10'
  },
  {
    id: '6',
    description: 'Restaurante',
    type: 'debit',
    amount: 156.75,
    bank: 'Nubank',
    date: '2024/02/15'
  }
];

export default function Home() {
  return (
    <div className="conteiner">
      <div className="cabecalho">
        <PiggyBank size={45} className="icone verde" />
        <button className="botao-adicionar">
          <PlusCircle size={20} className="icone" />
        </button>
      </div>

      <div className="cartoes">
        {FINANCIAL_CARDS.map((card, index) => (
          <FinancialCard key={index} card={card} />
        ))}
      </div>

      <div className="secao-central">
        <div className="secao-analise">
          <h2 className="titulo-secao">Análise</h2>
          <AnalysisChart transactions={transactions} />
        </div>

        <div className="secao-categorias">
          <h2 className="titulo-secao">Categorias</h2>
          <div className="categorias">
            {categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>

      <div className="transacoes">
        <h2 className="titulo-secao">Transações</h2>

        <div className="cabecalho-tabela">
          <span className="coluna">Descrição</span>
          <span className="coluna">Tipo</span>
          <span className="coluna">Valor</span>
          <span className="coluna">Banco</span>
          <span className="coluna">Data</span>
          <span className="coluna">Parcelas</span>
        </div>

        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}

