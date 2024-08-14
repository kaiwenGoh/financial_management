import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const currentUser = localStorage.getItem('currentUser');

    if (!currentUser) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;
