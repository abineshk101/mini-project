import "./navbar.css"
import { useNavigate } from "react-router"
import { useSelector,useDispatch} from "react-redux" 
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
function Navbar(){

  const navigate=useNavigate()
  const logindata=useSelector(state=>state.userdetail.loginUserDetails)
  console.log(logindata)

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



  <div class="menu">
    <ul>
    <li>
        <Button variant="light" onClick={()=>navigate(-1)}>GoBack</Button>
      </li>
      <a href="#" class="menu-logo">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnNaYpGkQeyWDhzgvL0-LFQ9S-bVB0DDUlAg&usqp=CAU" alt="My Awesome Website"/>
  </a>
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
        <Button variant="light" onClick={Logout}>
          Log out
        </Button>
        
      </li>
    </ul>
  </div>
</nav>

    )
}
export default Navbar