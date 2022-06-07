import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './hooks/useAuth.jsx';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  return auth.loggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
