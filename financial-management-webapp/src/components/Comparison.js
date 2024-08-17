import React, { useContext,useEffect,useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {useNavigate} from 'react-router-dom';
export const Comparison = () => {
    const { analysis, getAnalysis } = useContext(GlobalContext);
    const { transactions } = useContext(GlobalContext);
    const [categories, setCategories] = useState([]);
    const [categoryTotals, setCategoryTotals] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getAnalysis();
    }, []);
    console.log(analysis)
    useEffect(() => {
        if (analysis && analysis.length > 0) {
            // Extract categories from the analysis data
            const allCategories = analysis.flatMap(item => item.categories || []);
            setCategories(allCategories);
        }
    }, [analysis]);

    useEffect(() => {
        console.log(transactions)
          if (transactions && transactions.length > 0) {
              // Calculate sum based on categories
              const categorySum = transactions.reduce((acc, transaction) => {
                  const { category, amount } = transaction;
                  if (acc[category]) {
                      acc[category] += amount;
                  } else {
                      acc[category] = amount;
                  }
                  return acc;
              }, {});
  
              // Convert the sums to an array for easier rendering
              const categoryTotalsArray = Object.keys(categorySum).map(category => ({
                  category,
                  amount: categorySum[category]
              }));
  
              setCategoryTotals(categoryTotalsArray);
          }
      }, [transactions]);

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

    const getCategoryTotals = (category) => {
        const total = categoryTotals.find(cat => cat.category === category);
        return total ? total.amount : 0;
    };

    const getAnalyzedBudget = (category) => {
        const analyzedCategory = categories.find(cat => cat.category === category);
        return analyzedCategory ? analyzedCategory.amount : 0;
    };

    return (
        <div className="mb-4">
            <h4 className="block text-gray-700 font-bold mb-2">Comparison with Analysis</h4>
            {categories.length > 0 ? (
                Object.keys(categoriesDictionary).map(key => {
                    const categoryName = categoriesDictionary[key];
                    const analyzedBudget = getAnalyzedBudget(categoryName);
                    const actualSpent = getCategoryTotals(categoryName);

                    return (
                        <div key={key} className="mb-2 p-4 border rounded-lg shadow-sm">
                            <h5 className="font-bold">{categoryName}</h5>
                            <p>Analyzed Budget: ${analyzedBudget.toFixed(2)}</p>
                            <p>Actual Spent: ${actualSpent.toFixed(2)}</p>
                        </div>
                    );
                })
            ) : (
                <p>You have no existing analysis.
                    <button
                        type="button"
                        className="button-class hover:bg-gray-600 px-4 py-2 rounded"
                        onClick={() => navigate('/BudgetAnalysis')}
                    >
                        Create an Analysis
                    </button>
                </p>
            )}
        </div>
    )
}