import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Navbar from "../../login_and_register/header/navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { getgroupname,set_admin_groupname } from "../../redux/create_slice";

function ShareGroupDetailes()
{  
    let token=localStorage.getItem("token")
    let navigate=useNavigate()
    let dispatch=useDispatch()
    let loggedin_id=useSelector((state)=>state.userdetail.loginUserDetails.id)
    let groupname=useSelector((state)=>state.userdetail.user_groupnames)
    let show_admin_groupnames=useSelector((state)=>state.userdetail.admin_groupnames)
    let loggedin_user=useSelector((state)=>state.userdetail.loginUserDetails.name)
    let adminid=useSelector((state)=>state.userdetail.groupdetailes.adminid)

    

    function filteredList(){
        axios.get(`https://agaram.academy/api/shh/index.php?request=get_user_groups&user_id=${loggedin_id}&token=${token}`).then(function(response){
            console.log(response)
        dispatch(getgroupname(response.data.data))
    })}
    function admin_groups(){
    axios.get(`https://agaram.academy/api/shh/index.php?request=get_all_groups&admin_id=${loggedin_id}&token=${token}`).then(function(res){
        dispatch(set_admin_groupname(res.data.data))

    })
    }
    useEffect(()=>{
        if(localStorage.getItem('login')){
            filteredList()
            admin_groups()
        }else{
            navigate('/')
        }
    },[])
    console.log(groupname)
    console.log(show_admin_groupnames)
    
    function groupnav(id){
        navigate(`/groupdetails/${id}`)
    }
    function creategroup()
    {
        navigate("/creategroup")       
    }
  


    return(
        
        <>
    
        <Navbar />
        <h2>Self Help Hub</h2>
        {groupname?<h2>Users Groups</h2>:null}
        {groupname?
        groupname.map((data)=>{
            return (<>
            <div>
                <ul>
                <li><Button type="button" variant="outline-dark" onClick={()=>groupnav(data.id)}>{data.name}</Button></li>
                </ul>
            </div>
                </>
            )
        }
        ):null}
        {show_admin_groupnames?<h2>Admin group</h2>:null}
        {show_admin_groupnames? 
        show_admin_groupnames.map((data)=>{
            return (<>
            <div>
                <ul>
                <li><Button type="button" variant="outline-dark" onClick={()=>groupnav(data.id)}>{data.name}</Button></li>
                </ul>
            </div>
                </>
            )
        }
        ):null 
        }
        <Button type="button" onClick={()=>creategroup()} >Create Group</Button>
        <br/><br/>
        </>
        
    )
    }
export default ShareGroupDetailes