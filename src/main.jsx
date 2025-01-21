import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Heroregister from './components/Hero/Heroregister.jsx';



const router = createBrowserRouter([
  {
  path: "/",
  element: <Root/>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },

    {
      path: '/login',
      element: <Login></Login>
    },

    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/Heroregister',
      element: <Heroregister></Heroregister>
    }

    
  ]
  }
  ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
