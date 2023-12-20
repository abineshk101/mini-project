import React from "react";
import axios from "axios";
import { addgroupdata } from "../redux/create_slice";
import { useDispatch,useSelector } from "react-redux";

function CreateGroup()
{
   const  group_detailes=useSelector(state=>state.userdetail.groupdetailes)
   const dispatch=useDispatch()
   
    console.log(group_detailes)
    const registergroupdata=()=>{
        axios({
            method:"post",
            url:"https://jsonplaceholder.typicode.com/posts",
           
            data:group_detailes
        }).then(function(response){
            console.log(response)
        })
    }
    

    return(
     
        <>
        <h4>Group Create</h4>
       <p> GName<input type="text" name="GroupName" onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,groupname:e.target.value}))} /></p>
       <p>totalmonth<input type="text" name="totalmonth" onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,totalmonth:e.target.value}))}/></p>
       <p>Deadline<input type="text" name="deadline" onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,deadline:e.target.value}))}/></p>
       <p>No of Member<input type="text" name="numberofmember" onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,number_of_memeber:e.target.value}))}/></p>
       <p>Total Amount<input type="text" name="totalamount" onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,totalamount:e.target.value}))}/></p>
       <p>Amount Per Month<input type="text" name="amountpermonth" onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,amountpermonth:e.target.value}))}/></p>
       <h5>Admin Details</h5>
       <p>Admin Name <input type="text" name="adminname" onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,admin:{...group_detailes.admin,name:e.target.value}}))}/></p>
       <p>Admin Email <input type="text" name="adminemail" onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,admin:{...group_detailes.admin,email:e.target.value}}))}/></p>
       <p>Admin Phone <input type="text" name="adminname" onKeyUp={(e)=>dispatch(addgroupdata({...group_detailes,admin:{...group_detailes.admin,phone:e.target.value}}))}/></p>
        <button onClick={registergroupdata} > craete group</button> 
        </>
    )
}
export default CreateGroup
