import React from 'react';
import { useNavigate } from 'react-router-dom';
function Button({ value }) {
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/${value}`);
    }
    return <button className="square" onClick={handleClick}>{value}</button>;
  }

function HomePage() {
  return (
    <div>
      <>
        <div className="main_page">
          <Button value = "ExpenseTracking"/>
          <Button value = "BudgetAnalysis"/>
        </div>
      </>
    </div>
  );
}

export default HomePage;
