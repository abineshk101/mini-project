import React from "react";
import axios from 'axios';
import {useEffect } from "react";
import Card from 'react-bootstrap/Card';
import './style.css'
import { individualData,statusData,updateAmount} from "../../redux/create_slice";
import {useSelector,useDispatch } from "react-redux";
// import { useParams } from "react-router";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
// import { Navbar } from "react-bootstrap";
import { useParams } from "react-router"
import Navbar from "../../login_and_register/header/navbar"


function UserIndividualDetailes() {
  const individual=useSelector((state)=>state.userdetail.individual)
  const status=useSelector((state)=>state.userdetail.status)
  const loginid=useSelector((state)=>state.userdetail.loginUserDetails.id)
  const updateamount=useSelector((state)=>state.userdetail.updateamount)
  const statustoken=useSelector((state)=>state.userdetail.statustoken)

    console.log(updateamount)
  

  const navigate=useNavigate()
  console.log(individual)
  const {groupid}=useParams()
  const {token}=useParams()
  console.log(token)
  const dispatch=useDispatch()
  useEffect(() => {
    individualEach()
    razor()
  }, [])
  function individualEach(){
    axios.get(`https://agaram.academy/api/shh/index.php?request=get_group_details&group_id=${groupid}`)
      .then(res => dispatch(individualData(res.data.data.members)))
  }
  function razor(){
    axios.get(`https://agaram.academy/api/shh/index.php?request=get_user_payments&group_id=${groupid}&user_id=${loginid}`)
      .then(function(res){dispatch(updateAmount(res.data.data))
      
      })
  }
  let b=updateamount.map((up)=>{
   return(Number(up.amount))
    })
    
    let number=0;
    for (let n of b){
      number=number+n
    }
    console.log(number)
 
  const razorPay=()=>{
    dispatch(statusData(true))
    navigate(`/payment/${groupid}`)
  }
  const email=()=>{
    navigate("/email")
   }
  return (
    <>
    <Navbar/>
    <div class="full">
      <Card class="card text-dark bg-dark mb-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7C1jVOcBY3LpyT3GJcdQHAYyBuW6Js6h3w&usqp=CAU" />
      <Card.Body class="body"> 
          <>
          {individual.map((indi)=>
            <>
            {indi.id==loginid?<>
            <h3>{indi.name}</h3>
            <h3>{indi.email}</h3>
            <h3>{indi.phone}</h3>
            <h3>{number}</h3>
            Payment Status: {statustoken?<span class="button">Paid</span>:<span>Pending</span>}<br/>
            </>:""}
            </>
          )}
          <Button variant="light" onClick={()=>razorPay()}>Pay</Button>
          </>
    </Card.Body>
    </Card>
    </div>
    </>
  )
}
export default UserIndividualDetailes