import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Lp from './Pages/login.jsx';
import ErrorPage from './Pages/404.jsx';
import Land from './Pages/landingPage.jsx';


const router = createBrowserRouter([
  {
    path :"/",
    element: <Lp/>,
    errorElement: <ErrorPage/>
  },
  {
    path :"/menu",
    element: <Land/>,  
    errorElement: <ErrorPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>,
)
