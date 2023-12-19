import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import axios from "axios";

function AcceptbyAdmin(){
    const [user,set_user]=useState(["abi","ajin"])
    axios({
        method:"GET",
        url:"https://jsonplaceholder.typicode.com/users",
    }).then(function(response){
        for (let n in response.data){
            // let tot=[...user,set_user(response.data[n].username)]
            // console.log(tot)
        }
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