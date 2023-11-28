import './App.css';
import React from 'react';
import Login from './login_and_register/Login';
import Sample from './sample';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/page",
    element: <Sample />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return(
    <>
    
    <React.StrictMode>
    <RouterProvider router={router} />
    <Login />
    </React.StrictMode>
    
    </>
  )
}

export default App;
