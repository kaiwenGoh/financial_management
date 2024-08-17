import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { GlobalContext } from '../context/GlobalState';
import { useState, useContext } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartComponent2 = () => {
  const { transactions } = useContext(GlobalContext);
  const [chartType, setChartType] = useState('all'); // 'all' or 'expenses'

  const getChartData = () => {
      const categoryTotals = transactions.reduce((acc, transaction) => {
          const { category, amount } = transaction;
          if (chartType === 'expenses' && amount > 0) return acc;
          
          if (!acc[category]) {
              acc[category] = 0;
          }
          acc[category] += Math.abs(amount);
          return acc;
      }, {});

      return {
          labels: Object.keys(categoryTotals),
          datasets: [{
              data: Object.values(categoryTotals),
              backgroundColor: [
                  '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                  '#FF9F40', '#FF6384', '#C9CBCF', '#7CFC00', '#8B008B',
              ],
          }],
      };
  };

  const options = {
      responsive: true,
      plugins: {
          legend: {
              position: 'top',
          },
          title: {
              display: true,
              text: chartType === 'all' ? 'Income and Expenses by Category' : 'Expenses by Category',
          },
      },
  };

  return (
      <div>
          <div className="flex mb-4 space-x-4 rounded overflow-hidden">
                <button
                    className={`flex-1 py-2 px-4 ${chartType === 'all' ? 'button-class' : 'bg-gray-200 rounded-lg'}`}
                    onClick={() => setChartType('all')}
                >
                    All Transactions
                </button>
                <button
                    className={`flex-1 py-2 px-4 ${chartType === 'expenses' ? 'button-class' : 'bg-gray-200 rounded-lg'}`}
                    onClick={() => setChartType('expenses')}
                >
                    Expenses Only
                </button>
            </div>
          <Pie data={getChartData()} options={options} />
      </div>
  );
}