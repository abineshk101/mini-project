import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/esm/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch,useSelector } from 'react-redux';
import {groupdata} from '../../redux/create_slice';
import "./groupdetailes.css"
function  Eachgroupdetailes()
{
let separte_groupdata=useSelector(state=>state.userdetail.separtegroupdata)
// console.log(typeof(separte_groupdata))

const navigate=useNavigate()
const dispatch=useDispatch()
 var a=moment().format('MMMM Do YYYY')
const apidata=()=>
{
    axios.get('https://agaram.academy/api/shh/index.php?request=get_group_details&group_id=1').then(res=>
    {
        console.log(res.data.data)
        dispatch(groupdata(res.data.data))
        // console.log('separte_groupdata',separte_groupdata)

        
    }
    )
    
}
useEffect(

    ()=>{apidata()},[]
)
const checkloginuser=(id)=>{
    alert(id)
    if(id==1)
    {
        navigate('/')
    }
    else
    {
        navigate('/groupdetailes')
    }
}

    return(
        <>
        {a}
        {JSON.stringify(separte_groupdata)}
          <Button type='button' className='btn btn-dark' style={{float:'left'}} onClick={()=>{navigate("/homepage")}}> Go Back </Button> 
     <h6 style={{float:'right'}}> <Button className='primary' onClick={()=>navigate('/email')}>Add User</Button></h6>
     <Table style={{display:"flex",justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
        {
            separte_groupdata.members.map(

                (data)=>
                <>
                {/* <h2>{data.name}</h2> */}
           
             <Button type='button' className='btn btn-info' onClick={()=>checkloginuser(data.id)} style={{ width: '18rem' }}>  
             
      <ListGroup variant="flush">
        <ListGroup.Item>{data.name}</ListGroup.Item>
        <ListGroup.Item>{data.id}</ListGroup.Item>
        <ListGroup.Item>{data.total_month}</ListGroup.Item>
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