import React from 'react';

function BudgetAnalysisPage() {
  return (
    <div>
      <h1>Budget Analysis Page</h1>

      <form action="/action_page.php">
        <p>Monthly Income: <input type="text" placeholder="Enter a number" /></p>

        <p>Expected Savings: <input type="text" placeholder="Enter a number" /></p>

        <label htmlFor="location">Location: </label>
        <select name="location" id="location">            
          <option value="victoria">Victoria</option>
          <option value="nsw">NSW</option>
          <option value="queensland">Queensland</option>
          <option value="southaus">South Australia</option>
          <option value="tasmania">Tasmania</option>
          <option value="northaus">North Australia</option>
          <option value="canberra">Canberra</option>
          <option value="westaus">West Australia</option>
        </select>
        <br /><br />

        <p>What do you normally spend on? </p>
        <input type="checkbox" id="spend1" name="spend1" value="Groceries" />
        <label htmlFor="vehicle1"> Food & Drink (Groceries)</label><br />
        <input type="checkbox" id="spend2" name="spend2" value="Alcohol&Tobacco" />
        <label htmlFor="vehicle2"> Alcohol & Tobacco</label><br />
        <input type="checkbox" id="spend3" name="spend3" value="Fashion" />
        <label htmlFor="vehicle3"> Fashion</label><br />
        <input type="checkbox" id="spend4" name="spend4" value="Household" />
        <label htmlFor="vehicle1"> Household</label><br />
        <input type="checkbox" id="spend5" name="spend5" value="Health" />
        <label htmlFor="vehicle2"> Health</label><br />
        <input type="checkbox" id="spend6" name="spend6" value="Transport" />
        <label htmlFor="vehicle3"> Transport</label><br />
        <input type="checkbox" id="spend7" name="spend7" value="Recreation" />
        <label htmlFor="vehicle1"> Recreation</label><br />
        <input type="checkbox" id="spend8" name="spend8" value="OutsideFood" />
        <label htmlFor="vehicle2"> Outside Food</label><br />
        <input type="checkbox" id="spend9" name="spend9" value="Miscellaneous" />
        <label htmlFor="vehicle3"> Miscellaneous</label><br /><br />

        <input type="submit" value="Submit" />
      </form>

      
    </div>
  );
}

export default BudgetAnalysisPage;



