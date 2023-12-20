import React from "react";
import { useDispatch,useSelector} from "react-redux";
import { addMembers } from "../redux/create_slice";
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import axios from "axios";

function AcceptbyAdmin(){
    let userlist=useSelector((state)=>state.userdetail.membersList)
    let dispatch=useDispatch()
    console.log(userlist)
    axios({
        method:"GET",
        url:"https://jsonplaceholder.typicode.com/users",
    }).then(function(response){
        dispatch(addMembers(response))
    })
    
    
    return(
        <>
         <Table striped bordered hover variant="dark">
            <thead>

                <tr>
                <th>User List</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Abinesh</td>
                <td>Ajay</td>
                </tr>
            </tbody>
        </Table>
        <Button type="button">View</Button>
        </>
    )
    }
export default AcceptbyAdmin