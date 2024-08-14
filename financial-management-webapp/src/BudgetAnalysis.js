import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import axios from 'axios';

function BudgetAnalysisPage() {
    const [income, setIncome] = useState('');
    const [savings, setSavings] = useState('');
    const [location, setLocation] = useState('');
    const [spendingCategories, setSpendingCategories] = useState([]);
    const [response, setResponse] = useState('');

    const locationOptions = [
      { value: "victoria", label: "Victoria" },
      { value: "nsw", label: "New South Wales" },
      { value: "queensland", label: "Queensland" },
      { value: "southaus", label: "South Australia" },
      { value: "tasmania", label: "Tasmania" },
      { value: "northaus", label: "North Australia" },
      { value: "canberra", label: "Canberra" },
      { value: "westaus", label: "West Australia" }
    ];

    const spendingCategoriesData = [
      { id: '1', label: 'Groceries' },
      { id: '2', label: 'Alcohol & Tobacco' },
      { id: '3', label: 'Fashion' },
      { id: '4', label: 'Household' },
      { id: '5', label: 'Health' },
      { id: '6', label: 'Transport' },
      { id: '7', label: 'Recreation' },
      { id: '8', label: 'Outside Food' },
      { id: '9', label: 'Miscellaneous' },
    ];
    

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSpendingCategories(prevCategories => 
          prevCategories.includes(value)
            ? prevCategories.filter(category => category !== value)
            : [...prevCategories, value]
        );
      };
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (spendingCategories.length === 0) {
        alert('Please select at least one spending category.');
        return;
    }
      try {
          const result = await axios.post('http://localhost:3000/data', {
            spendingCategories,
            savings,
            location,
            income
          });
          setResponse(result.data);
          navigate('/BudgetOutput', { state: { responseData: result.data } });
      } catch (error) {
          console.error('Error submitting data:', error);
      }
    };
    
      return (
        <div className='flex flex-col min-h-screen'>
          <Header/>
          <div className="flex flex-col items-center justify-center flex-grow sm:p-8"> 
          <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md w-full sm:max-w-md overflow-y-auto">
            <h1 className="text-2xl font-bold mb-4">Budget Analysis Page</h1>
    
            <form action="/action_page.php" id="input" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="income" className="block text-gray-700 font-bold mb-2">Monthly Income:</label>
                <input 
                  type="number" 
                  id="income" 
                  value={income} 
                  onChange={(e) => setIncome(e.target.value)} 
                  required 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder="Enter a number" 
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="savings" className="block text-gray-700 font-bold mb-2">Expected Savings:</label>
                <input 
                  type="number" 
                  id="savings" 
                  value={savings} 
                  onChange={(e) => setSavings(e.target.value)} 
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  placeholder="Enter a number" 
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location:</label>
                <select 
                  type="string" 
                  id="location" 
                  value={location} 
                  onChange={(e) => e ? setLocation(e.target.value) : setLocation("Victoria")} 
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
     
                >
                  {locationOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
    
              <div className="mb-4">
                <p className="text-gray-700 font-bold mb-2">What do you normally spend on?</p>
                {spendingCategoriesData.map(category => (
                  <div key={category.id} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`spend${category.id}`}
                      name={`spend${category.id}`}
                      value={category.id}
                      checked={spendingCategories.includes(category.id)}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <label htmlFor={`spend${category.id}`}> {category.label}</label>
                  </div>
                ))}
              </div>
    
              <div className="flex justify-center"> {/* Center the button */}
                <input 
                  type="submit" 
                  value="Submit" 
                  className="button-class" 
                />
              </div>
            </form>
            {response && (
                <div>
                    <h2>Response</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
          </div>
        </div>
        </div>
        
      );
    }
    
    
export default BudgetAnalysisPage;



