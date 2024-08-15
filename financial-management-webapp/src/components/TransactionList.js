import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="mb-4"> 
            <label className="block text-gray-700 font-bold mb-2">History</label>
            <ul className="list-disc pl-5 mb-4">
              {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
    </div>
  )
}
