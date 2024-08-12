import React from 'react';

function SaveButton() {
  return (
    <button>
      Save
    </button>
  );
}

function BudgetAnalysisPage() {
  return (
    <div>
      <h1>Budget Analysis Page</h1>
      <p>Monthly Income: <input type="text" placeholder="Enter a number" /></p>
      <p>Expected Savings: <input type="text" placeholder="Enter a number" /></p>
      <SaveButton />
    </div>
  );
}

export default BudgetAnalysisPage;



