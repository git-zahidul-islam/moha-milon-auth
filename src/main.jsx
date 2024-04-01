import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Context from './Context/Context';
import Order from './Components/Order';
import PrivateRouter from './PrivateRouter/PrivateRouter';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/order',
        element: <PrivateRouter><Order></Order></PrivateRouter>
      },
      {
        path: '/profile',
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
      },
      {
        path: '/dashboard',
        element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
  </React.StrictMode>,
)
