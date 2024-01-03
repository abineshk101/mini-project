import React from "react";
import './login.css'
import axios from 'axios'; 
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLoginData, getloginUser } from "../../redux/create_slice";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from "react-bootstrap";

function Login(){
    const loginUserData=useSelector((state)=>state.userdetail.loginData)
    const getuserIdData=useSelector((state)=>state.userdetail.getId)
    console.log(getuserIdData)
        const dispatch=useDispatch()                                 
        const navigate=useNavigate()
useEffect(()=>{
    if(localStorage.getItem("Auth-token")){
       navigate('/homepage')
    
}
},[])


const checkLogin=()=>{
  let formdata= new FormData()
  formdata.append("email",loginUserData.email)
  formdata.append("password",loginUserData.password)

    axios.post(`https://agaram.academy/api/shh/index.php?request=login_user`,formdata).then(function(res){
      // console.log(res)
        let checkLog=res.data.status
      if(checkLog==='success'){
        // console.log(res.data.data)
        dispatch(getLoginData(''))
        dispatch(getloginUser(res.data.data))
        console.log(res.data)
        navigate('/homepage')
        localStorage.setItem("login","success")
        }
      else{
        alert("enter the valid input")
      }

    }
    )
}
const checkclientRegister=()=>{
  navigate('/register')
}
  
        
            

    return(
        <>  
        
        <div className="containers">
        {JSON.stringify(getuserIdData)}
        {/* {JSON.stringify(loginUserData)} */}
        <div className="login">
        <form action="">
       <b><h1>Login</h1></b><br/>
        <div className="input-box">
        <label>Email:</label><br/>
        <i class="fa-solid fa-user"></i>
        <input type="text" placeholder='email' onKeyUp={(e)=>{dispatch(getLoginData({...loginUserData,email:e.target.value}))}} ></input><br/>
        </div>
        <div className="input-box">
        <label>Password:</label><br/>
        <i class="fa-solid fa-key"></i>
        <input type="password" placeholder='password' onKeyUp={(e)=>{dispatch(getLoginData({...loginUserData,password:e.target.value}))}}></input><br/>
        </div><br/>
        <Button type="button"  variant="primary" onClick={()=>checkLogin()}>Submit</Button><br/>
        <p>Don't have an account?</p>
        <Button type="button"  variant="success" onClick={()=>checkclientRegister()}>register</Button>
        </form>  
        </div>
        </div>
        </>
    )
}
export default Login;