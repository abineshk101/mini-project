import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/esm/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import {groupdata,eachgroupdata} from '../../redux/create_slice';
import "./groupdetailes.css"
import { CardBody } from 'react-bootstrap';
function  Eachgroupdetailes()
{
    useEffect(

        ()=>{apidata()},[]
    )
let separte_group_members=useSelector(state=>state.userdetail.groupdata.members)
let separte_group_data=useSelector(state=>state.userdetail.eachgroupdata)
let deadline=useSelector((state)=>state.userdetail.eachgroupdata.deadline)
const navigate=useNavigate()
const dispatch=useDispatch()
const apidata=()=>
{
    axios.get('https://agaram.academy/api/shh/index.php?request=get_group_details&group_id=1').then(res=>
    {
        console.log(res.data.data)
        dispatch(groupdata(res.data.data.members))
        dispatch(eachgroupdata(res.data.data))
        
    }
    )
    
}


const checkloginuser=(id)=>{
  
    for(let i=0;i<separte_group_data.members.length;i++)
    {
    if(id==1)
    {
        navigate(`/user/${1}`)
    }
    else
    {
        navigate('/groupdetails')
     }
}
}
const adminpage=(admin_id)=>
{
    navigate(`/admin/${admin_id}`)
    alert(admin_id)
}
let deadlinedateformat =moment().format(`${deadline} MMMM YYYY`)
let deadlinecounter=moment(`${deadlinedateformat}`, "DD").fromNow();
    return(
        <>
    
          <Button type='button' className='btn btn-dark' style={{float:'left'}} onClick={()=>{navigate("/homepage")}}> Go Back </Button> 
     <h6 style={{float:'right'}}> <Button className='primary' onClick={()=>navigate('/email')}>Add User</Button></h6><br/>
        {deadlinedateformat}
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