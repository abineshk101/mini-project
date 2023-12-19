import './App.css';
import Sample from './sample';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './Detailes/email';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';


import React from 'react';
import UserIndividualDetailes from './Detailes/user_individual_detailes'
const router = createBrowserRouter([
  {
    path: "/sample",
    element: <Sample />,
  },
  {
    path:"/",
    element:<UserIndividualDetailes/>
  }
]);

function App() {
  return(
    <Provider >
   
    <RouterProvider router={router} />
    
    </Provider>
  )
}

export default App;
