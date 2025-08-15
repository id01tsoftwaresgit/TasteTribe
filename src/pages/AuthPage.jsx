import React from 'react';
import { useLocation } from 'react-router-dom';

const AuthPage = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold">{isLoginPage ? 'Log In' : 'Sign Up'}</h1>
      <p className="mt-2 text-gray-600">
        {isLoginPage ? 'Welcome back!' : 'Create your account to start curating.'}
      </p>
      {/* Login or Signup form will go here */}
    </div>
  );
};

export default AuthPage;
