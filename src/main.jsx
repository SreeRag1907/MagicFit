import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home/Home.jsx'
import Cart from './components/custom/cart/Cart.jsx'
import MagicFit from './components/custom/magicfit/MagicFit.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import SignInPage from './auth/sign-in/SignIn.jsx'
import MyCollections from './components/custom/magicfit/collections/MyCollections.jsx'
import FitChecker from './components/custom/magicfit/fitchecker/FitChecker.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/magicFit',
        element: <MagicFit />
      },
      {
        path:'/magicFit/my-collections',
        element:<MyCollections/>
      },
      {
        path: '/magicFit/checker',
        element: <FitChecker/>
      }
    ]
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
  {
    path: '/',
    element: <Home />
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>,
)
