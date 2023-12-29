import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './login_and_register/login/login'
import Register from './login_and_register/register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactUs from './Detailes/email';
import CreateGroup from './group_create/CreateGroup/create_group';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserIndividualDetailes from './Detailes/user_individual_detailes'
import React from 'react';
import ShareGroupDetailes from './group_create/homepage/homepage_gro';
import Eachgroupdetailes from './Detailes/GroupDetailes/groupdetailes';

const router = createBrowserRouter([
  {
    path:"/individualdetail",
    element:<UserIndividualDetailes/>
  },
 
  {
    path:"/email",
    element:<ContactUs/>
  },
  {
    path:"/homepage",
    element:<ShareGroupDetailes />
  },
  {
    path:"/",
    element:<Login />
  },
  {
    path:"/register",
    element:<Register />
  },
  {
    path:"/creategroup",
    element:<CreateGroup />
  },
  {
    path:"/groupdetails/:groupid",
    element:<Eachgroupdetailes />
  }
]);

function App() {
  return(
    <Provider store={store} >
   
    <RouterProvider router={router} />
    
    </Provider>
  )
}

export default App;
