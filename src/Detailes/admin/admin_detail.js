import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { adminData, statusshow } from "../../redux/create_slice";
import { useSelector, useDispatch } from "react-redux";
import './style1.css'
import Badge from 'react-bootstrap/Badge';
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';


function GroupDetailes() {
  const admin = useSelector((state) => state.userdetail.admin)
  console.log(admin)
  const status = useSelector((state) => state.userdetail.status)
  const pay = useSelector((state) => state.userdetail.payment)
  const statusss = useSelector((state) => state.userdetail.statuss)
  console.log(statusss)
  const month = pay.month
  console.log(month)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { groupid } = useParams()
let a=statusss.map((amt) =>
  amt.status
)
console.log(a)

  useEffect(() => {
    adminEach()
    statusShow()
  }, [])
  function back() {
    navigate(`/groupdetails/${groupid}`)
  }
  function adminEach() {
    axios.get(`https://agaram.academy/api/shh/index.php?request=get_group_details&group_id=${groupid}`)
      .then(res => dispatch(adminData(res.data.data)))
  }
  function statusShow() {
    axios.get(`https://agaram.academy/api/shh/index.php?request=get_users_by_month&group_id=${groupid}&month=${month}`)
      .then(res => 
        dispatch(statusshow(res.data.data)))
  }
  
  return (
    <>
      <Button type="button" onClick={() => back()}>Go Back</Button>
      <div class="box">
        <h1 className="text-center text-dark">{admin.name}</h1>
        <h5 className="text-center text-dark">Admin: {admin.admin_name}</h5>
        
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>USER NAME</th>
              <th>PHONE NUMBER</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {
              admin.members.map((adm, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{adm.name}</td>
                    <td>{adm.phone}</td>
                    <td>{admin.amount_per_month}</td>
                    <td>{a[i]}</td>
                    
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