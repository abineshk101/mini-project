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
import React from 'react';
import ShareGroupDetailes from './group_create/homepage/homepage_gro';

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
    path:"homepage",
    element:<ShareGroupDetailes />
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
