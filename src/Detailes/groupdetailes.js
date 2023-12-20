import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { useDispatch,useSelector } from 'react-redux';
import {groupdata} from '../redux/create_slice';
function  Eachgroupdetailes()
{
let separtegroupdata=useSelector(state=>state.userdetail.separtegroupdata)
const dispatch=useDispatch()
const apidata=()=>
{
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=>
    {
        console.log(res.data)
        dispatch(groupdata(res.data))
        
    }
    )
    
}
 let adminname=separtegroupdata[0].email;
//  let totalmonth=separtegroupdata[0].email
    return(
        <>
       {/* <h1 className="" */}
        <Card.Body>{adminname}</Card.Body>
        <input type='button' onClick={apidata}></input>
        </>
    )
}
export default Eachgroupdetailes