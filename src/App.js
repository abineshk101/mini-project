import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store';
import { Provider } from 'react-redux';
import Login from './login_and_register/login/login'
import Register from './login_and_register/register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserIndividualDetailes from './Detailes/individual/user_individual_detailes'
import GroupDetailes from './Detailes/admin/admin_detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './Detailes/email';
import React from 'react';
import ShareGroupDetailes from './group_create/homepage/homepage_gro';
import CreateGroup from './group_create/CreateGroup/create_group';
import Eachgroupdetailes from './Detailes/GroupDetailes/groupdetailes';
import Payment from './Detailes/individual/payment';

const router = createBrowserRouter([
  
  {
    path:"/individualdetail/:groupid",
    element:<UserIndividualDetailes/>
  },
  {
    path:"/individualdetail/:groupid&/:token",
    element:<UserIndividualDetailes/>
  },
  {
    path:"/admin/:groupid",
    element:<GroupDetailes/>
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
  },{
    path:"/payment/:groupid",
    element:<Payment />
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
