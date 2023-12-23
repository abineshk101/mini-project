import React from "react";
import axios from 'axios';
import {useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { adminData } from "../../redux/create_slice";
import {useSelector,useDispatch } from "react-redux";
import './style1.css'


function GroupDetailes()
{
    const admin=useSelector((state)=>state.userdetail.admin)
    const status=useSelector((state)=>state.userdetail.status)
    console.log(admin.members)
    const dispatch=useDispatch()
    
    useEffect(() => {
        axios.get('https://agaram.academy/api/shh/index.php?request=get_group_details&group_id=1')
          .then(res => dispatch(adminData(res.data.data)))
          
      }, [])
    return(
        <>
        <div class="box">
        <h1 className="text-center text-dark">{admin.name}</h1>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>S.NO</th>
          <th>USER NAME</th>
          <th>Phone Number</th>
          <th>AMOUNT</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {
            admin.members.map((adm,i)=>{
                return(
        <tr>
          <td>{i+1}</td>
          <td>{adm.name}</td>
          <td>{adm.phone}</td>
          <td>1000</td>
          <td>{status?<button>Paid</button>:<button>Pending</button>}</td>
        </tr>)
            })
        }
        
      </tbody>
    </Table>
    </div>
        </>
    )
}
export default GroupDetailes