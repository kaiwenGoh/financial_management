import React from 'react';
import { NavLink } from 'react-router-dom'; // Switch to NavLink
import '../index.css'

const Header = () => {
  return (
    <header className="flex header">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className='flex item-center'>
            <div className="leading-6 text-xl font-bold text-gray-800 mr-8">Elixir</div> {/* Assuming "Elixir" is the brand name */}
            <nav>
            <ul className="flex space-x-6">
                <li>
                <NavLink 
                    exact to="/" 
                    className="nav-link"
                >
                    Home
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/ExpenseTracking" 
                    className="nav-link"
                    
                >
                    Expense Tracking
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/BudgetAnalysis" 
                    className="nav-link"
                >
                    Budget Analaysis
                </NavLink>
                </li>
                <li>
                <NavLink 
                    to="/about" 
                    className="nav-link"
                >
                    About Us
                </NavLink>
                </li>
            </ul>
            </nav>
        </div>
        {/* Add user profile section here if needed */}
      </div>
    </header>
  );
};

export default Header;