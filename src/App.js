import './App.css';
import Sample from './sample';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserIndividualDetailes from './Detailes/user_individual_detailes'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
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

    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App;
