import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/esm/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from "moment"
import { json, useParams } from 'react-router';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import {groupdata,eachgroupdata} from '../../redux/create_slice';
import "./groupdetailes.css"
import { CardBody } from 'react-bootstrap';
import Navbar from '../../login_and_register/header/navbar';
function  Eachgroupdetailes()
{
    useEffect(
        ()=>{apidata() 
        },[]
        )
let logindata=useSelector((state)=>state.userdetail.loginUserDetails)
let username=useSelector((state)=>state.userdetail.loginUserDetails.name)
let useremail=useSelector((state)=>state.userdetail.loginUserDetails.email)
let separte_group_members=useSelector(state=>state.userdetail.groupdata.members)
let separte_group_data=useSelector(state=>state.userdetail.eachgroupdata)
let group_data=useSelector(state=>state.userdetail.eachgroupdata)
let deadline=useSelector((state)=>state.userdetail.eachgroupdata.deadline)
let adminid=useSelector((state)=>state.userdetail.groupdetailes.adminid)
let deadlinedateformat =moment().format(`${deadline} MMMM YYYY`);
let currentdate=moment().format(`DD MMMM YYYY`)

let deadlinecounter=moment(`${deadlinedateformat}`, "DD").fromNow();
let addmonth =moment().add(1, 'month').calendar()
let token=localStorage.getItem("token")
const {groupid}= useParams()
const navigate=useNavigate()
const dispatch=useDispatch()
const apidata=()=>
{
    axios.get(`https://agaram.academy/api/shh/index.php?request=get_group_details&group_id=${groupid}&token=${token}`).then(res=>
    {
        console.log(res.data.data)
        dispatch(groupdata(res.data.data.members))
        dispatch(eachgroupdata(res.data.data))
        
    }
    )
    
}



const checkloginuser=(id)=>{
  
    if(id==logindata.id)
    {
        navigate(`/individualdetail/${groupid}`)
    }
    else
    {
        navigate(`/groupdetails/${groupid}`)
     }
}
const adminpage=(admin_id)=>
{
    if(admin_id==logindata.id)
    {
        navigate(`/admin/${groupid}`)
    }
}
function deadlinealert()
{
    if(currentdate==deadlinedateformat)
    {
            // emailsend 
    }
    // else if(afterdeadlinedateformat==currentdate)
    // {

    //     let addmonth =moment().add(1, 'month').calendar()
    //     let deadlinedateformat=moment().format(`${deadline} ${addmonth} YYYY`)
    // }

    
}
    return(
        <>
        <Navbar />
          <Button type='button' className='btn btn-dark' style={{float:'left'}} onClick={()=>{navigate("/homepage")}}> Go Back </Button> 
          <Button type='button'onClick={deadlinealert}>Deadlinealert</Button><br/>
   { logindata.id==separte_group_data.admin_id?<h6 style={{float:'right'}}> <Button className='primary' onClick={()=>navigate('/email')}>Add User</Button></h6> :<></>}
        <div style={{display:"inline-block"}}>
       
        <h6>your name :{logindata.name}</h6>
        
        <h6> your id :{logindata.id}</h6>
        </div>
        <div style={{float:"right", marginBottom:'20px'}}>

<h6>Amount Per Month :{group_data.amount_per_month}</h6>
<h6>Total month :{group_data.total_month}</h6>
{/* <h6> Deadline :{deadlinedateformat}</h6> */}
{/* <h6>Deadlinealert :{deadlinecounter}</h6> */}
</div>
        <></>
     <Table style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
           <h1>{separte_group_data.name}</h1>
     <Button type='button' onClick={()=>adminpage(separte_group_data.admin_id)}>
         <Card><CardBody>
            <h2 style={{fontFamily: 'Times New Roman", Times, serif', fontSize:'20px'}}>Admin Detailes</h2>
         <ListGroup variant="flush">
        <ListGroup.Item  style={{width:'18rem'}}>{separte_group_data.admin_id}</ListGroup.Item>
        <ListGroup.Item style={{width:'18rem'}}>{separte_group_data.admin_name}</ListGroup.Item>
       </ListGroup>
        </CardBody></Card>
        </Button>
        <h2 style={{fontFamily: 'Times New Roman", Times, serif', fontSize:'20px'}}>Your Detailes</h2>
        <Button type='button' className='btn btn-info' onClick={()=>checkloginuser(logindata.id)} style={{ width: '18rem' }}>               
         <ListGroup variant="flush">
            <ListGroup.Item>{logindata.name}</ListGroup.Item>
            <ListGroup.Item>{logindata.email}</ListGroup.Item>
      </ListGroup>
      </Button>
        <h2 style={{fontFamily: 'Times New Roman", Times, serif', fontSize:'20px'}}>List of members</h2>
        {
       separte_group_members .map(
                (data)=>
                <>
                
             <Button type='button' className='btn btn-light' onClick={()=>checkloginuser(data.id)} style={{ width: '18rem' }}>               
         <ListGroup variant="flush">
            <ListGroup.Item>{data.name}</ListGroup.Item>
          
            <ListGroup.Item>{data.email}</ListGroup.Item>
      </ListGroup>
   
    </Button>
    <br/>
           </>
            )
        }
     </Table>
    
        </>
    )
    
}
export default Eachgroupdetailes