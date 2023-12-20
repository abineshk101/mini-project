import React from "react";
import { useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from "./logOut";
function Homepage(){
 const navigate=useNavigate()
const createGroup=()=>{
    navigate('/user')
}
 return(
     <>
     {/* {JSON.stringify(userHome)} */}
     <h1>welcome to homepage</h1><br/>
     <button type="button" onClick={()=>createGroup()}>creategroup+</button>
     <Logout/>
     </>
     
 )
}
export default Homepage