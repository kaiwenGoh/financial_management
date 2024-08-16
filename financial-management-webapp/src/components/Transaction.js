import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className="text-gray-700 flex justify-between">
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => {
                deleteTransaction(transaction._id);
            }} 
            className="text-red-500 ml-4">x</button>
        </li>
    )
}