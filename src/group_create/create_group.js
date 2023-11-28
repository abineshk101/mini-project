import React from "react";
function CreateGroup()
{
    const alertdata =()=>
    {
        alert('hi')
    }
    return(
     
        <>
        <h4>Group Create</h4>
        GName<input type="text" name="GroupName" onKeyUp={()=>alertdata()} />
        </>
    )
}
export default CreateGroup