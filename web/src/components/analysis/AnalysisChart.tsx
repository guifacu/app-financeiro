import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Transaction } from '../../types';
import { formatCurrency } from '../../utils/format';

interface AnalysisChartProps {
  transactions: Transaction[];
}

export function AnalysisChart({ transactions }: AnalysisChartProps) {
  // Organiza as transações por data e calcula os totais
  const chartData = transactions
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map(transaction => ({
      date: transaction.date,
      valor: transaction.amount,
      tipo: transaction.type === 'credit' ? 'Crédito' : 'Débito'
    }));

  const formatXAxis = (dateStr: string) => {
    try {
      // Converte a string de data para o formato brasileiro
      const date = parseISO(dateStr.split('/').reverse().join('-'));
      return format(date, 'd MMM', { locale: ptBR });
    } catch {
      return dateStr;
    }
  };

  const formatTooltipValue = (value: number) => {
    return formatCurrency(value);
  };

  return (
    <div className="analise">
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272A" />
          <XAxis 
            dataKey="date" 
            tickFormatter={formatXAxis}
            stroke="#6B7280"
          />
          <YAxis 
            tickFormatter={formatTooltipValue}
            stroke="#6B7280"
          />
          <Tooltip 
            formatter={formatTooltipValue}
            contentStyle={{
              backgroundColor: '#18181B',
              border: '1px solid #27272A',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="valor" 
            stroke="#10B981" 
            name="Valor"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 