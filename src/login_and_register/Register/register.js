import React from "react";
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
import { getRegisterData } from "../../redux/create_slice";
import { useNavigate } from "react-router";
import { useState } from "react";
import "./register.css"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';import 'bootstrap/dist/css/bootstrap.min.css';

function Register(){ 
const registerDetails=useSelector((state)=>state.userdetail.registerData)
const dispatch=useDispatch( )
const navigate=useNavigate()


 const checkclientRegister = ()=>{
    // alert("done")
     let formdata= new FormData()
     formdata.append("name",registerDetails.name)
     formdata.append("email",registerDetails.email)
     formdata.append("password",registerDetails.password)
     formdata.append("phone",registerDetails.phone)
     formdata.append("aadhar",registerDetails.aadhar)
            axios.post('https://agaram.academy/api/shh/index.php?request=register_user',formdata).then(function(response){
                 dispatch(getRegisterData(registerDetails))
                 console.log(response)})
                  navigate('/')
                
             
            }    
    const checkclientLogin=()=>{
        navigate('/')
        }
    return(
        <>
    
         
         <form onSubmit={()=>checkclientRegister()}> 
        
         <h1>Register</h1> 
         {JSON.stringify(registerDetails)}<br/>
	        
             <label>name:</label><br/>
            <input type="text" required onKeyUp={(e)=>{dispatch(getRegisterData({...registerDetails,name:e.target.value}))}}/><br/>
            <label>email:</label><br/>
            <input type="email" required onKeyUp={(e)=>{dispatch(getRegisterData({...registerDetails,email:e.target.value}))}}/><br/>
            <label>password</label><br/>
            <input type="password" required  onKeyUp={(e)=>{dispatch(getRegisterData({...registerDetails,password:e.target.value}))}}/><br/>
            <label>phone:</label><br/>
            <input type="number" required onKeyUp={(e)=>{dispatch(getRegisterData({...registerDetails,phone:e.target.value}))}}/><br/>
            <label>Addhar:</label><br/>
            <input type="number" required onKeyUp={(e)=>{dispatch(getRegisterData({...registerDetails,addhar:e.target.value}))}}/><br/>
            <Button variant="primary" type="submit" >submit</Button><br/>
           
            
          
          <Link type="button"  variant="info" onClick={()=>checkclientLogin()}>Already have an account?</Link>  
           </form>

                </>
    )
}
export default Register;