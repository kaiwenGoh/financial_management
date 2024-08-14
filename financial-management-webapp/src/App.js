
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import BudgetAnalysisPage from './BudgetAnalysis';
import ExpenseTrackingPage from './ExpenseTracking';
import BudgetOutputPage from './BudgetOutput';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/HomePage" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/AboutPage" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
        <Route path="/BudgetAnalysis" element={<ProtectedRoute><BudgetAnalysisPage /></ProtectedRoute>} />
        <Route path="/ExpenseTracking" element={<ProtectedRoute><ExpenseTrackingPage /></ProtectedRoute>} />
        <Route path="/BudgetOutput" element={<ProtectedRoute><BudgetOutputPage /></ProtectedRoute>} />
      </Routes>

    </Router>
  );
}

export default App;
