import React from "react";
import './login.css'
import axios from 'axios'; 
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLoginData, getloginUser,sendEmails } from "../../redux/create_slice";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Login(){
    const loginUserData=useSelector((state)=>state.userdetail.loginData)
    console.log(loginUserData)
    const getuserIdData=useSelector((state)=>state.userdetail.getId)
    console.log(getuserIdData)
        const dispatch=useDispatch()                                 
        const navigate=useNavigate()

    const sendemail=useSelector((state)=>state.userdetail.emailsend)
    const eachgroup=useSelector((state)=>state.userdetail.eachgroupdata)
    console.log(sendemail)
    console.log(getuserIdData)
       

const addUser=()=>{
   
  axios.get(`https://agaram.academy/api/shh/index.php?request=add_group_member&group_id=${eachgroup.id}&user_id=${loginUserData.id}`).then(function(res){
  console.log(res)
  })
  dispatch(sendEmails(''))
}

const checkLogin=()=>{
  let formdata= new FormData()
  formdata.append("email",loginUserData.email)
  formdata.append("password",loginUserData.password)
    axios.post(`https://agaram.academy/api/shh/index.php?request=login_user`,formdata).then(function(res){
      console.log(res)
        let checkLog=res.data.status
      if(checkLog==='success'){
        console.log(res.data.data)
        console.log(checkLog)
        dispatch(getLoginData(''))
        console.log(res.data)
        dispatch(getloginUser(res.data.data))
        localStorage.setItem("login","success")
        localStorage.setItem("token",res.data.token)
        navigate('/homepage')
      }
      else{
        alert("enter the valid email or password")
      }

    }
    )
}
const checkclientRegister=()=>{
  navigate('/register')
}
    return(
        <>
         <div>
        {/* {JSON.stringify(getuserIdData)} */}
        <div className="login">
        <form action="">
       <b><h1>SIGN IN</h1></b><br/>
        <div className="input-box">
        <label>Email:</label><br/>
        <i class="fa-solid fa-user" ></i>
        <input type="email" placeholder='email' onKeyUp={(e)=>{dispatch(getLoginData({...loginUserData,email:e.target.value}))}} ></input><br/>
        </div>
        <div className="input-box">
        <label>Password:</label><br/>
        <i class="fa-solid fa-key" ></i>
        <input type="password" placeholder='password' onKeyUp={(e)=>{dispatch(getLoginData({...loginUserData,password:e.target.value}))}}></input><br/>
        </div><br/>
        <Button type="button"  variant="dark" onClick={()=>checkLogin()}>Submit</Button><br/>
        <Link type="button"  variant="info" onClick={()=>checkclientRegister()}>Don't have an account?</Link> 
        </form>  
        </div>
        </div>
        </>
    )
}
export default Login