import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  // Fetch transactions for the current user when the component mounts
  useEffect(() => {
    getTransactions(); // Fetch all transactions for the current user
  }, []);


  return (
    <div className="mb-4"> 
      <label className="block text-gray-700 font-bold mb-2">History</label>
      <ul className="list-disc pl-5 mb-4">
        {transactions.length > 0 ? (
          transactions.map(transaction => (
            <Transaction key={transaction._id} transaction={transaction} />
          ))
        ) : (
          <p>No past transactions.</p>
        )}
      </ul>
    </div>
  );
};
