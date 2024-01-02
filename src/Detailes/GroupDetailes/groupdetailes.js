import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/esm/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from "moment"
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import {groupdata,eachgroupdata} from '../../redux/create_slice';
import "./groupdetailes.css"
import { CardBody } from 'react-bootstrap';
import { useParams } from 'react-router';
function  Eachgroupdetailes()
{
    useEffect(
        ()=>{apidata()},[]
        )
let loginid=useSelector((state)=>state.userdetail.loginUserDetails.id)
let separte_group_members=useSelector(state=>state.userdetail.groupdata.members)
let separte_group_data=useSelector(state=>state.userdetail.eachgroupdata)
let group_id=useSelector(state=>state.userdetail.eachgroupdata.id)
let deadline=useSelector((state)=>state.userdetail.eachgroupdata.deadline)
let adminid=useSelector((state)=>state.userdetail.groupdetailes.adminid)
let deadlinedateformat =moment().format(`${deadline} MMMM YYYY`);
let currentdate=moment().format(`DD MMMM YYYY`)
let deadlinecounter=moment(`${deadlinedateformat}`, "DD").fromNow();
// let deadlinedate=JSON.parse(deadline);
// let a=deadlinedate+1;
const {groupid}= useParams()
const navigate=useNavigate()
const dispatch=useDispatch()
const apidata=()=>
{
    axios.get(`https://agaram.academy/api/shh/index.php?request=get_group_details&group_id=${groupid}`).then(res=>
    {
        console.log(res.data.data)
        dispatch(groupdata(res.data.data.members))
        dispatch(eachgroupdata(res.data.data))
        
    }
    )
    
}


const checkloginuser=(id)=>{
  
    // for(let i=0;i<separte_group_data.members.length;i++)
    // {
    if(id==loginid)
    {
        navigate(`/individualdetail/${groupid}`)
    }
    else
    {
        navigate(`/groupdetails/${groupid}`)
     }
// }
}
const adminpage=(admin_id)=>
{
    if(admin_id==loginid)
    {
        navigate(`/admin/${groupid}`)
        alert(admin_id)
    }
}
function deadlinealert()
{
    if(currentdate==deadlinedateformat)
    {
        alert(1)
    }
    else
    {
        alert(2)
    }
}
    return(
        <>
        {loginid}
        {separte_group_data.admin_id}
          <Button type='button' className='btn btn-dark' style={{float:'left'}} onClick={()=>{navigate("/homepage")}}> Go Back </Button> 
          <Button type='button'onClick={deadlinealert}>Deadlinealert</Button>
   { loginid==separte_group_data.admin_id?<h6 style={{float:'right'}}> <Button className='primary' onClick={()=>navigate('/email')}>Add User</Button></h6> :null}
        {deadlinedateformat}
        
        <></>
     <Table style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
           <h1>{separte_group_data.name}</h1>
     <Button type='button' onClick={()=>adminpage(separte_group_data.admin_id)}>
         <Card><CardBody>
         <ListGroup variant="flush">
        <ListGroup.Item  style={{width:'18rem'}}>{separte_group_data.admin_id}</ListGroup.Item>
        <ListGroup.Item style={{width:'18rem'}}>{separte_group_data.admin_name}</ListGroup.Item>
       </ListGroup>
        </CardBody></Card>
        </Button>
        {
       separte_group_members .map(
                (data)=>
                <>
                
             <Button type='button' className='btn btn-info' onClick={()=>checkloginuser(data.id)} style={{ width: '18rem' }}>               
         <ListGroup variant="flush">
            <ListGroup.Item>{data.name}</ListGroup.Item>
            <ListGroup.Item>{data.id}</ListGroup.Item>
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