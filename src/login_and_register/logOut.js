import { useNavigate} from "react-router-dom";
function Logout(){
    const navigate=useNavigate()
     const checkclientLogout=()=>{
        localStorage.removeItem('Auth-token')
        navigate('/login')
    }

return(
    <>
   <button type="button" onClick={()=>checkclientLogout()}>logout</button>
    </>
)
}
export default Logout