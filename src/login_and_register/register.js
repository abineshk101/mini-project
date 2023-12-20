import React from "react";
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
import { getRegisterData } from "../Reducers/userSlice";
import { useNavigate } from "react-router";
function Register(){ 
const registerDetails=useSelector((state)=>state.user.registerData)
const dispatch=useDispatch()
const navigate=useNavigate()

const checkclientRegister = ()=>{
           axios({
                method : 'post',
                url : 'http://agaram.academy/api/action.php',
                 Data : 
                     registerDetails
                 
             }).then(function(response){
                dispatch(getRegisterData(registerDetails))
                console.log(response)})
                navigate("/login")
            }
            const checkclientLogin=()=>{
                navigate('/login')
            }
    return(
        <>
        <h1>Register</h1>
        {JSON.stringify(registerDetails)}
        <form>
            <label>name:</label><br/>
            <input type="text" onKeyUp={(e)=>{dispatch(getRegisterData({...registerDetails,name:e.target.value}))}}/><br/>
            <label>email:</label><br/>
            <input type="text" onKeyUp={(e)=>{dispatch(getRegisterData({...registerDetails,email:e.target.value}))}}/><br/>
            <label>phone:</label><br/>
            <input type="number" onKeyUp={(e)=>{dispatch(getRegisterData({...registerDetails,phone:e.target.value}))}}/><br/>
            <label>password</label><br/>
            <input type="password" onKeyUp={(e)=>{dispatch(getRegisterData({...registerDetails,password:e.target.value}))}}/><br/>
            <button type="submit" onClick={checkclientRegister}>submit</button>
            <button type="button" onClick={()=>checkclientLogin()}>login</button>

        </form>
        
        </>
    )
}
export default Register