import './App.css';
import AcceptbyAdmin from './group_create/user_list';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserIndividualDetailes from './Detailes/user_individual_detailes'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const router = createBrowserRouter([
  {
   path:"/userlist",
   element:<AcceptbyAdmin />
  },
  {
    path:"/",
    element:<UserIndividualDetailes/>
  }
]);

function App() {
  return(
    <RouterProvider router={router} />
  )
}

export default App;
