import axios from "axios";
import Button from "react-bootstrap/esm/Button";
function Adduser()
{
    let formdata=new FormData()
    formdata.append("group_id",1)
    // formdata.append("user_id",2)
    const adduser=()=>{
        axios.get('https://agaram.academy/api/shh/index.php?request=get_group_details&group_id=1').then(function(res)
    {console.log(res)})
    // axios.get('https://agaram.academy/api/shh/index.php?request=get_group_details&group_id=1')
    //   .then(res => console.log(res))
    }
    return(
        <>
        Gname<input type="text" ></input> 
        <Button type="button" onClick={adduser}>add user</Button>
        </>
    )
}
export default Adduser