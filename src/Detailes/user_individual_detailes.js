import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from "./nabar/navbar";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';

import './style.css';
// import emailjs from 'emailjs-com';
import { individualData } from "../redux/create_slice";
import { useSelector,useDispatch } from "react-redux";
function UserIndividualDetailes() {
  const individual=useSelector((state)=>state.userdetail.individual)
  console.log(individual)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(() => {
    axios.get("https://agaram.academy/api/shh/index.php?request=get_group_details&group id=1")
      .then(res => dispatch(individualData(res.data.data)))
      
  }, [])
  
  const razorpay=()=>{
    window.location="https://rzp.io/i/R7r95VQWB"
  }
  const emailSend=()=>{
   navigate("/email")
  }
  return (
    <>
     {/* <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">User Details</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Admin page</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Navbar.Brand href="#home">Logout</Navbar.Brand>
        </Container>
      </Navbar> */}
     
      <Navbar/>
      {/* {individual} */}
    <div className="box">
      {/* <img class="img" src="https://img.freepik.com/premium-photo/purple-gradient-wall-blank-studio-room-plain-studio-background_570543-7224.jpg"></img> */}
      {/* <video class="vd" src="https://v.ftcdn.net/02/82/86/97/700_F_282869778_TmvUX5mUHM1CznZdEH0jsYzwszVZlPS5_ST.mp4"></video> */}
    <div class="full">
      <Card class="card text-white bg-dark mb-3" style={{ width: '14rem' }}>
      <Card.Img class="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7C1jVOcBY3LpyT3GJcdQHAYyBuW6Js6h3w&usqp=CAU" />
      <Card.Body class="body">
        <Card.Text>USER NAME</Card.Text>
        <Card.Text>
          user email
        </Card.Text>
        <Card.Text>
          Phone number
        </Card.Text>
        <Card.Text>
          Amount paid
        </Card.Text>
        <Button  onClick={()=>razorpay()}>Pay</Button><br></br>
        <Button  onClick={()=>emailSend()}>emailSend</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  )
}
export default UserIndividualDetailes
