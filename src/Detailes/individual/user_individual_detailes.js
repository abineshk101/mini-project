import React from "react";
import axios from 'axios';
import {useEffect } from "react";
import Card from 'react-bootstrap/Card';
import './style.css'
import { individualData,statusData} from "../../redux/create_slice";
import {useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";

function UserIndividualDetailes() {
  const individual=useSelector((state)=>state.userdetail.individual)
  const status=useSelector((state)=>state.userdetail.status)
  const loginid=useSelector((state)=>state.userdetail.loginUserDetails.id)
  const navigate=useNavigate()
  console.log(individual)
  const {groupid}=useParams()
  const dispatch=useDispatch()
  useEffect(() => {
    axios.get(`https://agaram.academy/api/shh/index.php?request=get_group_details&group_id=${groupid}`)
      .then(res => dispatch(individualData(res.data.data.members
        )))
  }, [])
 

  const razorPay=()=>{
    dispatch(statusData(true))
    // navigate("/admin")
    window.location="https://rzp.io/i/NvRczQQh"

  }
  
  return (
    <>
    <div class="full">
      
      <Card class="card text-white bg-dark mb-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7C1jVOcBY3LpyT3GJcdQHAYyBuW6Js6h3w&usqp=CAU" />
      <Card.Body class="body">
        
          <>
          {individual.map((indi)=>
            <>
            
            {indi.id==loginid?<>
            <h3>{indi.name}</h3>
            <h3>{indi.email}</h3>
            <h3>{indi.phone}</h3>
            <h3></h3>
            Payment Status: {status?<span class="button">Paid</span>:<span>Pending</span>}<br/>
            </>:""}
            </>
          )}
          <Button variant="primary" onClick={()=>razorPay()}>Pay</Button>
          </>
          
      </Card.Body>
    </Card>
    </div>
    </>
  )
}
export default UserIndividualDetailes