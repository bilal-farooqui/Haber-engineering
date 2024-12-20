import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Product from './pages/Product';
import Service from './pages/Service';
import ProductDisplay from './pages/ProductDisplay';
import Admin from './pages/Admin';
import AuthWrapper from './authWrapper'; // Import the AuthWrapper component

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/', element: <Home /> },
  { path: '/product', element: <Product /> },
  { path: '/service', element: <Service /> },
  { path: '/productDisplay', element: <ProductDisplay /> },
  { path: '/admin', element: <Admin /> },
]);

const App = () => {
  return (
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  );
};

export default App;
