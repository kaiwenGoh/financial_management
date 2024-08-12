
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import BudgetAnalysisPage from './BudgetAnalysis';
import ExpenseTrackingPage from './ExpenseTracking';
import BudgetOutputPage from './BudgetOutput';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/BudgetAnalysis" element={<BudgetAnalysisPage />} />
        <Route path="/ExpenseTracking" element={<ExpenseTrackingPage />} />
        <Route path="/BudgetOutput" element={<BudgetOutputPage />} />
      </Routes>
    </Router>
  );
}

export default App;
