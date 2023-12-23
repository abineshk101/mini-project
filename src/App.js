import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sample from './sample';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './login_and_register/login/login'
import Homepage from './login_and_register/homepage';
import Register from './login_and_register/register';
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
    path: "/login",
    element: <Login />
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/home",
    element:<Homepage/>
  },
  // {
  //   path:"/user",
  //   element:<CreateGroup/>
  // }
]);

function App() {
  return(
    <Provider store={store}>
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
    </Provider>
  )
}

export default App;
