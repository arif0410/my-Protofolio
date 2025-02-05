import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import Lp from './Pages/login.jsx';
import Rp from './Pages/registerPage.jsx';
import ErrorPage from './Pages/404.jsx';
import Land from './Pages/landingPage.jsx';
import Crud from './Pages/crud.jsx';
import CrudA from './Pages/CrudA.jsx';
import CrudR from './Pages/crudR.jsx';


store.subscribe(() => {
  console.log("Redux Store Updated:", store.getState());
});

console.log("Redux Store Initial State:", store.getState());


const router = createBrowserRouter([
  { 
    path: '/home', 
    element: <div>hallo om</div>, 
    errorElement: <ErrorPage /> 
  },
  { 
    path: '/login', 
    element: <Lp />, 
    errorElement: <ErrorPage /> 
  },
  {  
    path: '/register', 
    element: <Rp />, 
    errorElement: <ErrorPage /> 
  },
  { 
    path: '/product', 
    element: <Land />, 
    errorElement: <ErrorPage /> 
  },
  { 
    path: '/', 
    element: <Crud />, 
    errorElement: <ErrorPage /> 
  },
  { 
    path: '/axios', 
    element: <CrudA />, 
    errorElement: <ErrorPage /> 
  },
  { 
    path: '/redux', 
    element: <CrudR />, 
    errorElement: <ErrorPage /> 
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* menyediakan store Redux ke seluruh aplikasi */}
      <RouterProvider router={router} /> {/* menggunakan router */}
    </Provider>
  </React.StrictMode>
);