import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Lp from './Pages/login.jsx';
import Rp from './Pages/registerPage.jsx';
import ErrorPage from './Pages/404.jsx';
import Land from './Pages/landingPage.jsx';
import Crud from './Pages/crud.jsx';
import Cruds from './Pages/crudR.jsx';



const router = createBrowserRouter([
  {
    path :"/home",
    element: <div>hallo om</div>,
    errorElement: <ErrorPage/>
  },
  {
    path :"/login",
    element: <Lp/>,
    errorElement: <ErrorPage/>
  },
  {
    path :"/register",
    element: <div><Rp/></div>,
    errorElement: <ErrorPage/>
  },
  {
    path :"/product",
    element: <Land/>,  
    errorElement: <ErrorPage/>
  },
  {
    path :"/",
    element: <Crud/>,  
    errorElement: <ErrorPage/>
  },
  {
    path :"/CrudRegister",
    element: <Cruds/>,  
    errorElement: <ErrorPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>,
)
