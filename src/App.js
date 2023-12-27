import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Store from './redux/store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserIndividualDetailes from './Detailes/individual/user_individual_detailes'
import GroupDetailes from './Detailes/admin/admin_detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const router = createBrowserRouter([
  
  {
    path:"/user",
    element:<UserIndividualDetailes/>
  },
  {
    path:"/admin",
    element:<GroupDetailes/>
  }
]);

function App() {
  return(
    <>
    <Provider store={Store}>
    <RouterProvider router={router} />
    </Provider>
    </>
  )
}

export default App;
