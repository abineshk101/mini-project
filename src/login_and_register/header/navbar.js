import "./navbar.css"
import axios from "axios";
import { useEffect } from "react";
import { getloginUser,setrefresh } from "../../redux/create_slice";
import { useNavigate } from "react-router"
import { useSelector,useDispatch} from "react-redux"; 
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbares(){

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
      // <Navbar bg="secondary" className='nav ' data-bs-theme="dark">
      //   <Container>
      //     <Navbar.Brand href="#home" className='text-light font-weight-6 '>Self Help Hub</Navbar.Brand>
      // <Nav className="justify-content-end" activeKey="/home">
      //   <Nav.Item>
      //     <Nav.Link onClick={()=>{
      //       alert("Login first")
      //       navigate(`/`)}}>Home</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //     <Nav.Link onClick={()=>{navigate(`/`)}}>Features</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //     <Nav.Link eventKey="link-2">SignIn</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item>
      //     <Nav.Link eventKey="disabled" disabled>
      //       Disabled
      //     </Nav.Link>
      //   </Nav.Item>
      // </Nav>  
      // </Container>
      // </Navbar>
        <nav class="menu-container">
  
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>



  <div class="menu">
    <ul>
    <li>
        <Button variant="light" onClick={()=>{
          navigate(-1)}
          }>GoBack</Button>
      </li>
      <a href="#" class="menu-logo">
    <img src="https://img.freepik.com/free-vector/savings-concept-illustration_114360-1516.jpg?size=626&ext=jpg&ga=GA1.1.399537927.1704635677&semt=ais" alt="My Awesome Website"/>
  </a>
      
      <li>
        <h4> Hi {logindata.name}!</h4>
      </li>
      <li>
          <h4> Your Mail:{logindata.email}</h4>
      </li>
      <li>
      <i class="fa-solid fa-house"></i>
        <Link to='/homepage'>Home</Link>
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
export default Navbares