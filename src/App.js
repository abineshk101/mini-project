import './App.css';
import Sample from './sample';
import Login from './login_and_register/login';
import { Provider } from 'react-redux';
import Store from './store';
import Register from './login_and_register/register';
import Homepage from './login_and_register/homepage';
import CreateGroup from './login_and_register/createGroup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react';


const router = createBrowserRouter([
  {
    path: "/sample",
    element: <Sample />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path:"/",
    element:<Register/>
  },
  {
    path:"/home",
    element:<Homepage/>
  },
  {
    path:"/user",
    element:<CreateGroup/>
  }
]);

function App() {
  return(
    <Provider store={Store}>
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
    </Provider>
  )
}

export default App;
