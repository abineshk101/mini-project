import './App.css';
import Sample from './sample';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import React from 'react';
const router = createBrowserRouter([
  {
    path: "/sample",
    element: <Sample />,
  },
]);

function App() {
  return(

    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App;
