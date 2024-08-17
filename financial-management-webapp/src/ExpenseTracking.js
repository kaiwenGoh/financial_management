import React, { useState, useContext } from 'react';
import Header from './components/Header';
import { GlobalProvider } from './context/GlobalState';
import { GlobalContext } from './context/GlobalState';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Balance } from './components/Balance';
import { ChartComponent } from './components/Chart'

function ExpenseTrackingPage() {

  return (
    <GlobalProvider className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-row justify-center flex-grow sm:p-8 space-x-4">
        {/* First Column */}
        <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md w-full sm:max-w-md overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Graph</h2>
          <ChartComponent />
        </div>
        {/* Second Column */}
        <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md w-full sm:max-w-md overflow-y-auto">
          <h1 className="text-3xl font-bold mb-4">Expense Tracking </h1>
          {/* Add content for this section here */}
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
        {/* Third Column */}
        <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md w-full sm:max-w-md overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Comparison with Analysis</h2>
          {/* Add content for this section here */}
        </div>
      </div>
    </GlobalProvider>
  );
}

export default ExpenseTrackingPage;

