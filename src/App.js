import './App.css';
import Sample from './sample';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Apidata from './sampleapi';
import React from 'react';
import CreateGroup from './group_create/create_group';
const router = createBrowserRouter([
  {
    path: "/sample",
    element: <Sample />,
  },
  {
    path:"/creategroup",
    element:<CreateGroup />
  }
]);

function App() {
  return(

    <React.StrictMode>
      <Apidata />
    <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App;
