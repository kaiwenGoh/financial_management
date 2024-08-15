import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <div>
            <div className="mb-4">
                <h4 className="block text-gray-700 font-bold mb-2">Income</h4>
                <p className="money plus flex items-center mb-2">{income}</p>
            </div>

            <div className="mb-4">
                <h4 className="block text-gray-700 font-bold mb-2">Expense</h4>
                <p className="money minus flex items-center mb-2">{expense}</p>
            </div>
        </div>
    )
}