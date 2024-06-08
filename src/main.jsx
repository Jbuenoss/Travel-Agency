import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

//to react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/Home.jsx';
import Packages from './routes/Packages.jsx';
import ErrorPage from './routes/ErrorPage.jsx';


const router = createBrowserRouter([
  {
      path: '/',
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: 'packages',
          element: <Packages/>
        }
      ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
