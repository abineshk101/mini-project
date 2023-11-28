import './App.css';
import React from 'react';
import Login from './login_and_register/Login';
import Sample from './sample';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
<<<<<<< HEAD
import Apidata from './sampleapi';
import React from 'react';
import CreateGroup from './group_create/create_group';
=======

>>>>>>> cbe7c3914c0516126b8650aae438854072378b1e
const router = createBrowserRouter([
  {
    path: "/page",
    element: <Sample />,
  },
  {
<<<<<<< HEAD
    path:"/creategroup",
    element:<CreateGroup />
  }
=======
    path: "/login",
    element: <Login />,
  },
>>>>>>> cbe7c3914c0516126b8650aae438854072378b1e
]);

function App() {
  return(
    <>
    
    <React.StrictMode>
      <Apidata />
    <RouterProvider router={router} />
    <Login />
    </React.StrictMode>
    
    </>
  )
}

export default App;
