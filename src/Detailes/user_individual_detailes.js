import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'
// import { useSelector,useDispatch } from "react-redux";


function UserIndividualDetailes() {
  // const individual=useSelector((state)=>state.user.individual)
  // const dispatch=useDispatch()
  // useEffect(() => {
  //   axios.get("https://9e4a60c7-d991-48dc-a0a2-fba826b0bf94.mock.pstmn.io/groupdetailes")
  //     .then(res => dispatch(individualData(res.data)))
  // }, [])
  return (
    <>
    <div class="full">
      <Card class="card text-white bg-dark mb-3" style={{ width: '24rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7C1jVOcBY3LpyT3GJcdQHAYyBuW6Js6h3w&usqp=CAU" />
      <Card.Body class="body">
        <Card.Title>USER NAME</Card.Title>
        <Card.Text>
          user email
        </Card.Text>
        <Card.Text>
          Phone number
        </Card.Text>
        <Card.Text>
          Amount paid
        </Card.Text>
        <Button  class="but" variant="primary">PAY</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}
export default UserIndividualDetailes