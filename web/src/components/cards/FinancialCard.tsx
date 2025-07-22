import { FinancialCard as FinancialCardType } from '../../types';
import { formatCurrency } from '../../utils/format';

interface FinancialCardProps {
  card: FinancialCardType;
}

export function FinancialCard({ card }: FinancialCardProps) {
  const { title, icon: Icon, value, description, type } = card;
  
  const valueColor = type === 'expense' ? 'vermelho' : 'verde';

  return (
    <div className="cartao">
      <div className="cartao-cabecalho">
        <span>{title}</span>
        <Icon className="icone branco" size={30} />
      </div>
      <p className={`valor ${valueColor}`}>{formatCurrency(value)}</p>
      <p className="descricao">{description}</p>
    </div>
  );
} 