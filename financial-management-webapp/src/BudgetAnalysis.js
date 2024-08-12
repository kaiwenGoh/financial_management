import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function BudgetAnalysisPage() {
    const [income, setIncome] = useState('');
    const [savings, setSavings] = useState('');
    const [location, setLocation] = useState('');
    const [spendingCategories, setSpendingCategories] = useState([]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSpendingCategories(prevCategories => 
          prevCategories.includes(value)
            ? prevCategories.filter(category => category !== value)
            : [...prevCategories, value]
        );
      };
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        if (spendingCategories.length === 0) {
            alert('Please select at least one spending category.');
            event.preventDefault();
            return;
        }

    
        event.preventDefault(); 

        console.log('Income:', income);
        console.log('Savings:', savings);
        console.log('Location:', location);
        console.log('Spending Categories:', spendingCategories);

        navigate('/BudgetOutput');
      };
    
    return (
    <div>
      <h1>Budget Analysis Page</h1>

      <form action="/action_page.php" id = "input" onSubmit={handleSubmit}>
        <p>Monthly Income: <input type="numeric" placeholder="Enter a number" id = "income" onChange={(e) => setIncome(e.target.value)} required /></p>

        <p>Expected Savings: <input type="numeric" placeholder="Enter a number" id = "savings" onChange={(e) => setSavings(e.target.value)} required/></p>

        <label htmlFor="location">Location: </label>
        <select name="location" id="location" onChange={(e) => setLocation(e.target.value)} required>            
          <option value="victoria">Victoria</option>
          <option value="nsw">New South Wales</option>
          <option value="queensland">Queensland</option>
          <option value="southaus">South Australia</option>
          <option value="tasmania">Tasmania</option>
          <option value="northaus">North Australia</option>
          <option value="canberra">Canberra</option>
          <option value="westaus">West Australia</option>
        </select>
        <br /><br />

        <p>What do you normally spend on? </p>
        <input type="checkbox" id="spend1" name="spend1" value="1" onChange={handleCheckboxChange} />
        <label htmlFor="vehicle1"> Groceries</label><br />
        <input type="checkbox" id="spend2" name="spend2" value="2" onChange={handleCheckboxChange} />
        <label htmlFor="vehicle2"> Alcohol & Tobacco</label><br />
        <input type="checkbox" id="spend3" name="spend3" value="3" onChange={handleCheckboxChange} />
        <label htmlFor="vehicle3"> Fashion</label><br />
        <input type="checkbox" id="spend4" name="spend4" value="4" onChange={handleCheckboxChange} />
        <label htmlFor="vehicle1"> Household</label><br />
        <input type="checkbox" id="spend5" name="spend5" value="5" onChange={handleCheckboxChange} />
        <label htmlFor="vehicle2"> Health</label><br />
        <input type="checkbox" id="spend6" name="spend6" value="6" onChange={handleCheckboxChange} />
        <label htmlFor="vehicle3"> Transport</label><br />
        <input type="checkbox" id="spend7" name="spend7" value="7" onChange={handleCheckboxChange} />
        <label htmlFor="vehicle1"> Recreation</label><br />
        <input type="checkbox" id="spend8" name="spend8" value="8" onChange={handleCheckboxChange} />
        <label htmlFor="vehicle2"> Outside Food</label><br />
        <input type="checkbox" id="spend9" name="spend9" value="9" onChange={handleCheckboxChange} />
        <label htmlFor="vehicle3"> Miscellaneous</label><br /><br />

        <input type="submit" value="Submit" />
      </form>

      
    </div>
  );
}

export default BudgetAnalysisPage;



