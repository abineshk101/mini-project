import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { getgroupname,getadmingroup } from "../../redux/create_slice";

function ShareGroupDetailes()
{
    let navigate=useNavigate()
    let dispatch=useDispatch()
    let loggedin_id=useSelector((state)=>state.userdetail.loginUserDetails.id)
    let loggedin_user=useSelector((state)=>state.userdetail.loginUserDetails.name)
    let groupname=useSelector((state)=>state.userdetail.groupnames)
    let adminid=useSelector((state)=>state.userdetail.groupdetailes.adminid)
    let admingroup=useSelector((state)=>state.userdetail.admingroup)


    function filteredList(){
        axios.get(`https://agaram.academy/api/shh/index.php?request=get_user_groups&user_id=${loggedin_id}`).then(function(response){
        dispatch(getgroupname(response.data.data))
    })}

    useEffect(()=>{
        filteredList()
        admingrouplist()
    },[])
    function groupnav(id){
        navigate(`/groupdetails/${id}`)
    }
    function creategroup()
    {
        navigate("/creategroup")
       
    }
console.log(groupname)
    return(
        <>
            {/* {JSON.stringify(admingroup)} */}
        <h2>Self Help Hub</h2>
        {loggedin_user}
        {loggedin_id}
        {adminid}
        {groupname.map((data)=>{
            return (<>
            <div>
                <ul>
                <li><Button type="button" variant="outline-dark" onClick={()=>groupnav(data.id)}>{data.name}</Button></li>
                </ul>
            </div>
                </>
            )
        }
        )} 
        <h1>Admin Group</h1>
        {admingroup.map((data)=>{
            return (<>
            <div>
                <ul>
                <li><Button type="button" variant="outline-dark" onClick={()=>groupnav(data.id)}>{data.name}</Button></li>
                </ul>
            </div>
                </>
            )
        }
        )}
        <Button type="button" onClick={creategroup} >Create Group</Button>
        <br/><br/>
        </>
    )
}
export default ShareGroupDetailes