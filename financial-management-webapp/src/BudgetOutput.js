import React from 'react';
import { useLocation } from 'react-router-dom';

function BudgetOutput() {
    const location = useLocation();
    const { responseData } = location.state || {}; // Get response data from state

    return (
        <div>
            <h1>Budget Output Page</h1>
            {responseData ? (
                <div>
                    <h2>Posted Data</h2>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            ) : (
                <p>No data received.</p>
            )}
        </div>
    );
}

export default BudgetOutput;
