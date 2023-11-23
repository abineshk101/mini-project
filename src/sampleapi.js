import React from "react";
import axios from "axios";
function Apidata()
{
   let getdata=()=>{ axios({
        
        url:"https://d113dcd6-8207-49d9-b9b5-b3d400787c23.mock.pstmn.io/user",
        
        method:"Get",
  
         Data:{
             request:"Get_Users",
            //  name:"bhuvana"
        
        }
    }
    ).then(function(response){
        console.log('data',response)
    })}
    return(
        <>
        <button onClick={()=>getdata()}>Add</button>
        </>
    )
}
export default Apidata