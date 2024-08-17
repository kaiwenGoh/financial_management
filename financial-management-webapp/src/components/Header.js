import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../index.css'

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <header className="flex header">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className='flex items-center'>
          <div className="leading-6 text-xl font-bold text-gray-800 mr-8">KK Financial Management</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <NavLink to="/HomePage" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/ExpenseTracking" className="nav-link">
                  Expense Tracking
                </NavLink>
              </li>
              <li>
                <NavLink to="/BudgetAnalysis" className="nav-link">
                  Budget Analysis
                </NavLink>
              </li>
              <li>
                <NavLink to="/AboutPage" className="nav-link">
                  About Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <button 
          onClick={handleLogout}
          className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;