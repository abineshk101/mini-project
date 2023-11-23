import React from "react";
import {useState}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Login()
 {
  let[loginData,setLoginData]=useState({email:"",password:""})  
  const checkLogin=()=>{
    if(loginData.email===""&&loginData.password==="")
    { 
      alert("success")
  
    return(
      <>
      
      <label for="email"> email:</label>
      <input type="email" id="email" name="email"defaultValue={loginData.email} onKeyUp={(e)=>setLoginData({...loginData,email:e.target.value})}></input><br></br>
      <label for="password"> password:</label>
      <input type="password" id="password" name="password" defaultValue={loginData.password} onKeyUp={(e)=>setLoginData({...loginData,password:e.target.value})}></input><br></br>
      <button type="submit" onClick={()=>checkLogin()}>Login</button>

      </>

    )}
  }
}
export default Login