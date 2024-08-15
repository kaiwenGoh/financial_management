import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="mb-4">
            <h4 className="block text-gray-700 font-bold mb-2">Your Balance</h4>
            <h1 className="flex items-center mb-2">${total}</h1>
        </div>
    )
}