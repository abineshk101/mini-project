import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card'
import "./create_group.css";
import React from "react";
import axios from "axios";
import { addgroupdata } from "../../redux/create_slice";
import { useDispatch,useSelector } from "react-redux";

function CreateGroup()
{

  const  group_detailes=useSelector(state=>state.userdetail.groupdetailes)
  const dispatch=useDispatch()
    let formdata=new FormData()
      formdata.append("name",group_detailes.groupname)
      formdata.append("total_month",group_detailes.totalmonth)
      formdata.append("amount_per_month",group_detailes.amountpermonth)
      formdata.append("deadline",group_detailes.deadline) 
      formdata.append("admin_id",group_detailes.adminid)
    console.log(group_detailes)

  const registergroupdata=()=>{
    axios.post(`https://agaram.academy/api/shh/index.php?request=create_group`,formdata).then(function(res)
    {console.log(res)})
    }
  console.log("creategroup",formdata)
    return(
     
        <>
        
      <div id="content">
      

      <div id="container">

      <h4>Group Create</h4>
     

       <div class="mb-3">
  <label for="exampleFormControlInput1"  id="subhead" class="form-label">Group Name</label>
  <input type="text" class="form-control" id="input" placeholder="group name" onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,groupname:e.target.value}))}></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" id="subhead" class="form-label">Total Month</label>
  <input type="number" class="form-control" id="input" placeholder="total-month"  onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,totalmonth:e.target.value}))}></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" id="subhead" class="form-label">Deadline</label>
  <input type="number" class="form-control" id="input" placeholder="deadline"  onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,deadline:e.target.value}))}></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" id="subhead" class="form-label">Amount Per Month</label>
  <input type="number" class="form-control" id="input" placeholder="amount per month"  onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,amountpermonth:e.target.value}))}></input>
</div>

        <Button id="creategroupbutton" className="bn5" onClick={registergroupdata} > craete group</Button> <br/>
     
        </div>
</div>

        </>
    )
}
export default CreateGroup
