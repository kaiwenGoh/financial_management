import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { GlobalContext } from '../context/GlobalState';
import moment from 'moment';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const ChartComponent = () => {
  const { transactions } = useContext(GlobalContext);

  const todayLabel = moment().format('DD/MM/YYYY');
  
  const today = moment().startOf('day');

  // Filter transactions for today
  const todayTransactions = transactions.filter(transaction =>
    moment(transaction.date).isSame(today, 'day')
  );

  // Calculate total income and expenses for today
  const totalIncomeToday = todayTransactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpensesToday = todayTransactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  // Prepare the data for the chart with a single label for 'Today'
  const data = {
    labels: [todayLabel],  // Only one label
    datasets: [
      {
        label: 'Income',
        data: [totalIncomeToday],  // Total income for today
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Expenses',
        data: [Math.abs(totalExpensesToday)],  // Total expenses for today, converted to positive
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income and Expenses for Today',
      },
    },
  };

  return <Line data={data} options={options} />;
};
