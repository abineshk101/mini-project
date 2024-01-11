import React from "react";
import axios from "axios";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';

import Navbares from "../../login_and_register/header/navbar";
import { useEffect } from "react";
import { useNavigate ,useParams} from "react-router";
import { useSelector,useDispatch } from "react-redux";
import './homepage_gro.css'
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
        <Navbares />
        <div >
        <div style={{display:"flex",flexDirection:"column"}}>
      
        {/* <h1>Self Help Hub</h1> */}
        <h2>Users Groups</h2>
        {
        groupname.map((data)=>{
            return (<>
            <div>
            <button style={{marginRight:"40px",marginBottom:"40px",marginLeft:"40px",}} variant="primary" onClick={()=>groupnav(data.id)}>
            <Card style={{ width: '18rem',marginRight:"40px",marginBottom:"40px",marginTop:"20px",marginLeft:"" }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5lW-oMaA8C3mqvp4-u1dXrv4cUmRBweMnw&usqp=CAU" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
      </Card.Body>
    </Card>
    </button>
            </div>
                </>
            )
        }
        )}


        <h2>Admin group</h2>
        <div className="dataflex" style={{display:"flex",flexWrap: "wrap"}}>
        {
        show_admin_groupnames.map((data)=>{
            if(data.name!=""){
            return (<>
            <div>
            <button style={{marginBottom:"40px",marginRight:"40px",marginLeft:"40px"}}variant="primary" onClick={()=>groupnav(data.id)}>
            <Card style={{ width: '18rem',marginRight:"40px",marginBottom:"40px",marginLeft:"40px",marginTop:"20px" }}>
      <Card.Img variant="top" src="https://png.pngtree.com/png-clipart/20230825/original/pngtree-people-celebrate-picture-image_8649314.png" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
      </Card.Body>
    </Card>
                {/* <ul>
                <li><Button type="button"  variant="outline-dark" onClick={()=>groupnav(data.id)}>{data.name}</Button></li>
                </ul> */}
                </button>
            </div>
                </>
            )
        }}
        )
        }</div>
        <Button type="button" variant="dark" onClick={()=>creategroup()} >Create Group</Button>
        </div>
        </div>
        </>
        
    )
}
export default ShareGroupDetailes