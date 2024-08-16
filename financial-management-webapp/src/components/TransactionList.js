import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions(); // Fetch transactions when the component mounts
  }, []);

  console.log('Transactions:', transactions);

  return (
    <div className="mb-4"> 
      <label className="block text-gray-700 font-bold mb-2">History</label>
      <ul className="list-disc pl-5 mb-4">
        {transactions.map(transaction => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  )
}
