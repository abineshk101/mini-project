import './App.css';
import AcceptbyAdmin from './group_create/user_list';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from 'react';
const router = createBrowserRouter([
  {
   path:"/userlist",
   element:<AcceptbyAdmin />
  },
]);

function App() {
  return(
    <RouterProvider router={router} />
  )
}

export default App;
