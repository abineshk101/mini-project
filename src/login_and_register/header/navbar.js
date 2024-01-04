import "./navbar.css"
import axios from "axios";
import { useEffect } from "react";
import { getloginUser,setrefresh } from "../../redux/create_slice";
import { useNavigate } from "react-router"
import { useSelector,useDispatch} from "react-redux"; 
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
function Navbar(){

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const logindata=useSelector(state=>state.userdetail.loginUserDetails)
  let loggedin_id=useSelector((state)=>state.userdetail.loginUserDetails.id)
  let loggedin_detail=useSelector((state)=>state.userdetail.loginUserDetails)
  let token=localStorage.getItem('token')

  useEffect(()=>{
    if(localStorage.getItem('token')&&!loggedin_id)
        {
            tokens()
        }
},[loggedin_id])

function tokens()
{
    axios.get(`https://agaram.academy/api/shh/index.php?request=getUserDetailsByToken&token=${token}`).then(function(res)
    {
        console.log(res)

    dispatch(getloginUser(res.data.data))
    console.log(loggedin_detail)
    })
}
  function Logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('login')
        navigate('/')

    
  }

    return(
        <nav class="menu-container">
  
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>
  <a href="#" class="menu-logo">
    <img src="https://cdn5.vectorstock.com/i/1000x1000/68/89/team-or-friends-icon-digital-purple-vector-26326889.jpg" alt="My Awesome Website"/>
  </a>


  <div class="menu">
    <ul>
      <li>
        <Link to='/homepage'>Home</Link>
      </li>
      <li>
        <h4> Your name:{logindata.name}</h4>
      </li>
      <li>
          <h4> Your Mail:{logindata.email}</h4>
      </li>
     
    </ul>
    <ul>
      <li>
        <Button onClick={Logout}>
          Log out
        </Button>
        
      </li>
    </ul>
  </div>
</nav>

    )
}
export default Navbar