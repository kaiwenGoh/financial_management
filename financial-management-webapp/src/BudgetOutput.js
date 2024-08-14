import React from 'react';
import { json, useLocation } from 'react-router-dom';

function BudgetOutput() {
    const location = useLocation();
    const { responseData } = location.state || {}; // Get response data from state
    const parts = responseData.scriptOutput.split('] [');
    const arr = JSON.parse(parts[0] + ']');
    const arrcategory = JSON.parse('[' + parts[1]);

    const categoriesDictionary = {
      '1': 'Groceries',
      '2': 'Alcohol & Tobacco',
      '3': 'Fashion',
      '4': 'Household',
      '5': 'Health',
      '6': 'Transport',
      '7': 'Recreation',
      '8': 'Outside Food',
      '9': 'Miscellaneous'
    };

    const textItems = arr.map((value, index) => (
      <div key={index}>
          <strong>{categoriesDictionary[arrcategory[index]]}</strong>: AUD {(value / 10000).toFixed(2)}
      </div>
  ));

  return (
      <div className="flex flex-col items-center justify-center flex-grow sm:p-8 text-center">
        <div className="bg-white border border-gray-500 p-16 rounded-lg shadow-md w-full sm:max-w-md overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Budget Output Page</h1>
          <div className="block text-gray-700 font-bold mb-2">After analysing, we found out that for the following categories,</div>
          <div className="block text-gray-700 font-bold mb-2">you should try to spend the amount stated to reach your saving taget.</div>
          <br></br>
          <p>{textItems}</p>
          </div>
      </div>
    );
}

export default BudgetOutput;
