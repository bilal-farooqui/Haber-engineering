import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if username and password are stored in localStorage
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    console.log("USERNAME AND PASSWORD",username,password)

    if (!username || !password) {
      // If not found, redirect to login page
      navigate('/login');
    }
  }, [navigate]);

  return <>{children}</>; // Render the child components (routes) only after the check
};

export default AuthWrapper;
