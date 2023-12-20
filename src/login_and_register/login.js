import React from "react";
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getLoginData } from "../Reducers/userSlice";
import {useEffect} from 'react';


function Login(){
    const loginUserData=useSelector((state)=>state.user.loginData)
    const getuserIdData=useSelector((state)=>state.user.getId)
    console.log(getuserIdData)
       const dispatch=useDispatch()                                 
const navigate=useNavigate()
useEffect(()=>{
    if(localStorage.getItem("Auth-token")){
       navigate('/home')
    }
})


const checkLogin=()=>{
    axios.post(`http://agaram.academy/api/action.php?request=candidate_login&email=${loginUserData.email}&password=${loginUserData.password}`).then(res=>{
        let checkLog=res.data.status
      if(checkLog==='success'){
        localStorage.setItem('Auth-token',true)
        console.log(res)
        navigate('/home')
        // localStorage.setItem("login","success")
        // navigate("/home")
        // if(localStorage.getItem("guest")){
        //     localStorage.removeItem("guest")
        //     navigate(`/users/${getuserIdData}`)
        }
      else{
        alert("enter the valid input")
      }

    }
    )
}
const checkclientRegister=()=>{
  navigate('/')
}
  
        
            

    return(
        <>
        {JSON.stringify(getuserIdData)}
        {/* {JSON.stringify(loginUserData)} */}
        <h2>Login</h2><br/>
        <label>Email:</label><br/>
        <input type="text"onKeyUp={(e)=>{dispatch(getLoginData({...loginUserData,email:e.target.value}))}} ></input><br/>
        <label>Password:</label><br/>
        <input type="text" onKeyUp={(e)=>{dispatch(getLoginData({...loginUserData,password:e.target.value}))}}></input><br/>
        <button type="button" onClick={()=>checkLogin()}>Submit</button>
        <button type="button" onClick={()=>checkclientRegister()}>register</button>
        </>
    )
}
export default Login;