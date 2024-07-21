import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.jsx';
import Home from './home/Home.jsx';
import Cart from './components/custom/cart/Cart.jsx';
import MagicFit from './components/custom/magicfit/MagicFit.jsx';
import SignInPage from './auth/sign-in/SignIn.jsx';
import store from './redux/Store.js'; // Import your Redux store
import './index.css';
import Products from './components/custom/products/Products.jsx';
import ProductDetails from './components/custom/products/ProductDetails.jsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/magicFit',
        element: <MagicFit />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />,
      },
      
    ],
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
