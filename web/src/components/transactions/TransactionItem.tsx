import { ShoppingCart } from 'lucide-react';
import { Transaction } from '../../types';
import { formatCurrency } from '../../utils/format';

interface TransactionItemProps {
  transaction: Transaction;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const { description, type, amount, bank, date, installments } = transaction;

  return (
    <div className="transacao">
      <div className="coluna">
        <ShoppingCart size={16} />
        {description}
      </div>
      <div className="coluna">{type === 'credit' ? 'Crédito' : 'Débito'}</div>
      <div className="coluna vermelho">{formatCurrency(amount)}</div>
      <div className="coluna">{bank}</div>
      <div className="coluna">{date}</div>
      <div className="coluna">
        {installments && `${installments.current}/${installments.total}`}
      </div>
    </div>
  );
} 