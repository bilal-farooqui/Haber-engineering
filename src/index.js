import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Product from './pages/Product';
import Service from './pages/Service';
import ProductDisplay from './pages/ProductDisplay';
import Admin from './pages/Admin';
import ReactDOM from 'react-dom/client';

const App = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    // Check if username and password are stored in localStorage
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (!username || !password) {
      // If not found, redirect to login page
      navigate('/login');
    }
  }, [navigate]); // Dependency array to run this effect on mount

  return (
    <div>
      {/* Your app content goes here */}
    </div>
  );
};

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/', element: <Home /> },
  { path: '/product', element: <Product /> },
  { path: '/service', element: <Service /> },
  { path: '/productDisplay', element: <ProductDisplay /> },
  { path: '/admin', element: <Admin /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;
