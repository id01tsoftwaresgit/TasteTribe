import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // Show a loading spinner or a blank page while auth state is being determined
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them back there after they log in.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
