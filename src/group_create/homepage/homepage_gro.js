import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Navbar from "../../login_and_register/header/navbar";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { useNavigate ,useParams} from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { getgroupname,set_admin_groupname,statusToken,getloginUser } from "../../redux/create_slice";

function ShareGroupDetailes()
{  
    let navigate=useNavigate()
    let dispatch=useDispatch()
     
    let loggedin_id=useSelector((state)=>state.userdetail.loginUserDetails.id)
    let refresh=useSelector((state)=>state.userdetail.refresh)
    let token=localStorage.getItem('token')
    let{statustoken}=useParams()
    dispatch(statusToken(statustoken))
    useEffect(()=>
        {
            if(localStorage.getItem('token')&&!loggedin_id)
            {
                tokens()
                securealert()
            }
            else
            {    
                filteredList()
                admin_groups()
            }
        },[loggedin_id]
    )
    let loggedin_detail=useSelector((state)=>state.userdetail.loginUserDetails)
    let groupname=useSelector((state)=>state.userdetail.user_groupnames)
    let show_admin_groupnames=useSelector((state)=>state.userdetail.admin_groupnames)
    let loggedin_user=useSelector((state)=>state.userdetail.loginUserDetails.name)
    let adminid=useSelector((state)=>state.userdetail.groupdetailes.adminid)

      console.log(loggedin_detail)

    function filteredList(){
        axios.get(`https://agaram.academy/api/shh/index.php?request=get_user_groups&user_id=${loggedin_id}&token=${token}`).then(function(response){
            console.log(response)
        dispatch(getgroupname(response.data.data))
    })}

    function admin_groups(){
    axios.get(`https://agaram.academy/api/shh/index.php?request=get_all_groups&admin_id=${loggedin_id}&token=${token}`).then(function(res){
        dispatch(set_admin_groupname(res.data.data))
    })}
    function tokens()
    {
        axios.get(`https://agaram.academy/api/shh/index.php?request=getUserDetailsByToken&token=${token}`).then(function(res)
        {
            console.log(res)

        dispatch(getloginUser(res.data.data))
        console.log(loggedin_detail)
        })
    }

    console.log(groupname)
    console.log(show_admin_groupnames)
    
    function groupnav(id){
        navigate(`/groupdetails/${id}`)
    }
    function creategroup()
    {
        navigate("/creategroup")       
    }
    function securealert()
    {
        if(!token)
        {
            navigate('/')
        }
    }
    return(
        <>
        <Navbar />
        <div style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
      
        <h2>Self Help Hub</h2>
        <h2>Users Groups</h2>
        {
        groupname.map((data)=>{
            return (<>
            <div>
                <ul>
                <li><Button type="button"className=".bn5" variant="outline-dark" onClick={()=>groupnav(data.id)}>{data.name}</Button></li>
                </ul>
            </div>
                </>
            )
        }
        )}


        <h2>Admin group</h2>
        {
        show_admin_groupnames.map((data)=>{
            return (<>
            
             {/* <div>  */}
         
             <Card style={{ width: '18rem' }}>

             <Card.Img variant="top" src="group.jpg" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text> 
              Some quick example text to build on the card title and make up the
             bulk of the card's content.
            </Card.Text>
        <Button variant="primary"  onClick={()=>groupnav(data.id)}>{data.name}</Button>
      </Card.Body> 
     </Card> 
   
   <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
                {/* <ul>
                <li><Button type="button" variant="outline-dark" onClick={()=>groupnav(data.id)}>{data.name}</Button></li>
                </ul>
            </div> */}
                </>
            )
        }
        )
        }
        <Button type="button" variant="dark" onClick={()=>creategroup()} >Create Group</Button>
        </div>
        </>
    )
}
export default ShareGroupDetailes