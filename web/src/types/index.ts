export type TransactionType = 'credit' | 'debit';

export interface Transaction {
  id: string;
  description: string;
  type: TransactionType;
  amount: number;
  bank: string;
  date: string;
  installments?: {
    current: number;
    total: number;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  transactionCount: number;
  totalAmount: number;
  highlighted?: boolean;
}

export interface FinancialCard {
  title: string;
  icon: React.ElementType;
  value: number;
  description: string;
  type: 'income' | 'expense' | 'balance';
} 