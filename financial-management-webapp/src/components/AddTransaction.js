import React, { useState, useContext, useRef } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const counterRef = useRef(0);
    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        counterRef.current += 1;
        const newTransaction = {
            id: counterRef.current,
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }   

    return (
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Add new transaction</label>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label htmlFor="text" className="block text-gray-700 font-bold mb-2">Text</label>
                <input 
                  type="text" 
                  id="text" 
                  value={text} 
                  onChange={(e) => setText(e.target.value)} 
                  required 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder="Enter text..."
                />
              </div>

              <div className="mb-4">
                <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">
                  Amount <br />(negative - expense, positive - income)
                </label>
                <input 
                  type="number" 
                  id="amount" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)} 
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder="Enter amount..."
                />
              </div>

              <div className="flex justify-center">
                <input 
                  type="submit" 
                  value="Add Transaction" 
                  className="button-class hover:bg-gray-600" 
                />
              </div>
            </form>
        </div>
    )
}