import React from "react";
import axios from 'axios';
import {useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'
import { individualData } from "../redux/create_slice";
import {useSelector,useDispatch } from "react-redux";


function UserIndividualDetailes() {
  const individual=useSelector((state)=>state.userdetail.individual)
  console.log(individual)
  const dispatch=useDispatch()
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => dispatch(individualData(res.data)))
  }, [])
  // console.log(individual[0])

  const razorPay=()=>{
    window.location="https://rzp.io/i/NvRczQQh"
  }
  
  return (
    <>
    <div class="full">
      <Card class="card text-white bg-dark mb-3" style={{ width: '21rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7C1jVOcBY3LpyT3GJcdQHAYyBuW6Js6h3w&usqp=CAU" />
      <Card.Body class="body">
        {/* {
          individual.map((data,i)=>
          <h1>{data.id}</h1>
          )
        } */}
        <Card.Title>{individual[0].id}</Card.Title>
        <Card.Text>
          {individual[0].name}
        </Card.Text>
        <Card.Text>
          {individual[0].email}
        </Card.Text>
        <Card.Text>
          {individual[0].username}
        </Card.Text>
        <Button class="but" variant="primary" onClick={()=>razorPay()}>PAY</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}
export default UserIndividualDetailes