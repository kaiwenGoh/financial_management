import React, { useState, useContext } from 'react';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import { GlobalContext } from './context/GlobalState';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Balance } from './components/Balance';

function ExpenseTrackingPage() {

  return (
    <GlobalProvider className='flex flex-col min-h-screen'>
      <Header/>
      <div className="flex flex-col items-center justify-center flex-grow sm:p-8"> 
        <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md w-full sm:max-w-md overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Expense Tracking Page</h1>

          <Balance />

          <IncomeExpenses />

          <TransactionList />

          <AddTransaction />

        </div>
      </div>
    </GlobalProvider>
  );
}

export default ExpenseTrackingPage;

