import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from '../pages/about/About.jsx';
import Layout from './components/layout/Layout.jsx';
import Service from '../pages/service/service.jsx';
import Home from '../pages/home/Home.jsx';
import ProductDetail from '../pages/products/ProductDetail.jsx';
import SignUp from '../pages/auth/SignUp.jsx';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    
    children: [
      {
        path : '/',
        element: <Home/>
      },
      {
        path: "/detail",
        element: <ProductDetail/>
      },
      {
        path : '/home',
        element : <Home/>
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/service',
        element : <Service/>
      }
    ]
  },
  {
    path: "/signup",
    element: <SignUp/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
  </React.StrictMode>,
)
