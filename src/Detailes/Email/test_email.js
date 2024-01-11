import "./test_email.css"
import { sendEmails } from "../../redux/create_slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import React from "react";
import emailjs from '@emailjs/browser';
import { Button } from "react-bootstrap";
import Navbar from "../../login_and_register/header/navbar";

export default function Test_email(){
    let mail_info=useSelector((state)=>state.userdetail.emailsend)
    let user=useSelector((state)=>state.userdetail.loginUserDetails)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    function handlesubmit(e){
        e.preventDefault()

        let serviceId="service_27k84jv"
        let templateId="template_j11vbpb"
        let publicKey="dZrAbm-3JYE09RWTA"
    

        let templateParam={
            from_name:user.name,
            from_email:mail_info.email,
            to_name:mail_info.name,
            message:mail_info.message
        }

        emailjs.send(serviceId,templateId,templateParam,publicKey).then((res)=>{
            console.log(res)
            dispatch(sendEmails(""))
            alert("Email send successfully")
            navigate(-1)

        })
        .catch((error)=>{
            console.log("Error sending",error)
        })
    }
    return(<>
        <Navbar />
        <form onSubmit={handlesubmit} className="emailForm">
            <input id="dev1" type="text" placeholder="name"  onChange={(e)=>{dispatch(sendEmails({...mail_info,name:e.target.value}))}}></input>
            <input id="dev1" type="text" placeholder="email"  onChange={(e)=>{dispatch(sendEmails({...mail_info,email:e.target.value}))}}></input>
            <textarea id="dev1"  onChange={(e)=>{dispatch(sendEmails({...mail_info,message:e.target.value}))}}></textarea>
            <Button type="submit" id="dev1" >send mail</Button>
        </form>
        </>
    )
}