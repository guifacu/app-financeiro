import { Category } from '../../types';
import { formatCurrency } from '../../utils/format';

interface CategoryItemProps {
  category: Category;
}

export function CategoryItem({ category }: CategoryItemProps) {
  const { name, icon: Icon, transactionCount, totalAmount, highlighted } = category;

  return (
    <div className={`categoria ${highlighted ? 'destaque' : ''}`}>
      <Icon size={16} />
      <span>{name}</span>
      <span>{transactionCount}</span>
      <span>{formatCurrency(totalAmount)}</span>
    </div>
  );
} 