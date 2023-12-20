import './App.css';
import AcceptbyAdmin from './group_create/user_list';
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactUs from './Detailes/email';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserIndividualDetailes from './Detailes/user_individual_detailes'
import CreateGroup from './group_create/create_group';
import Eachgroupdetailes from './Detailes/groupdetailes';
import React from 'react';
const router = createBrowserRouter([
  {
   path:"/userlist",
   element:<AcceptbyAdmin />
  },
  {
    path:"/",
    element:<UserIndividualDetailes/>
  },
 
  {
    path:"/email",
    element:<ContactUs/>
  },
  {
    path:"/groupdetailes",
    element:<Eachgroupdetailes />
  },
  {
    path:"/creategroup",
    element:<CreateGroup />
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
