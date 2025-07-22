import { BanknoteArrowDown, BanknoteArrowUp, Banknote } from 'lucide-react';
import { FinancialCard } from '../types';

export const FINANCIAL_CARDS: FinancialCard[] = [
  {
    title: 'Entradas',
    icon: BanknoteArrowDown,
    value: 43231.00,
    description: 'Somada todas as entradas do período.',
    type: 'income'
  },
  {
    title: 'Saídas',
    icon: BanknoteArrowUp,
    value: 2265.05,
    description: 'Somada todas as saídas do período.',
    type: 'expense'
  },
  {
    title: 'Balanço',
    icon: Banknote,
    value: 40965.95,
    description: 'Somada todas as entradas e saídas do período.',
    type: 'balance'
  }
]; 