import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import "../FrontPage/Frontpage.css"
import money from "../FrontPage/money.jpg"
import pig from "../FrontPage/pig.jpg"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate ,useParams} from "react-router";
import sss from "../FrontPage/sss.jpg";
function Frontpage() {

let navigate = useNavigate()

  return (
    <>
     <div >
      <Navbar sticky='top'  bg="secondary" className='nav ' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='text-light font-weight-6 b-5'>Self Help Hub</Navbar.Brand>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link onClick={()=>{
          
            navigate(`/`)}}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{navigate(`/`)}}>Features</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{navigate(`/register`)}}>SignUp</Nav.Link>
        </Nav.Item>
        
      </Nav>  
      </Container>
      </Navbar>
     <main>
      <Container>
      <Row className='px-5 my-5'>
        <Col sm={7}>
        <Image src={money} fluid rounded/> 
    
        </Col>
        <Col sm={5}>
           {/* <Image src={ssh} fluid rounded/> */}
            <h1 class='font-weight-light'>Save Money!</h1>
           <p class=
          "m-4 ">♠ The value of saving money is paramount in today's world, as it provides financial security and opens up opportunities for a better future.Saving also enables individuals to achieve their long-term goals, whether it's buying a home, pursuing higher education, or starting a business.</p>
        </Col> 
  
      </Row>
      <Card>
      <Card.Body className='text-center bg-secondary text-light'>"The more you Learn ,The more you Earn".</Card.Body>
    </Card>
    <Row className='px-5 my-5'>
      <Col>
      <Card style={{ width: '18rem' }} className='bg-light'>
      <Card.Img variant="top" src={pig} />
      <Card.Body>
        <Card.Title>Group1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Join the Group</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }} className='bg-light'>
      <Card.Img variant="top" src={pig} />
      <Card.Body>
        <Card.Title>Group2</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Join the Group</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }} className='bg-light'>
      <Card.Img variant="top" src={pig} />
      <Card.Body>
        <Card.Title>Group3</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Join the Group</Button>
      </Card.Body>
    </Card>
      </Col>
    </Row>
    <Row className='px-5 my-5'>
        <Col sm={12}>
        <h1 class='font-weight-light'>Self Help Hub!</h1>
           <p class=
          "m-4 ">♠ The value of saving money is paramount in today's world, as it provides financial security and opens up opportunities for a better future.Saving also enables individuals to achieve their long-term goals, whether it's buying a home, pursuing higher education, or starting a business.</p>
        </Col> 
        {/* <Image src={money} fluid rounded/>  */}
    
        
        <Col sm={5}>
            <Image src={sss} fluid rounded/>
        </Col> 
  
      </Row>
      </Container>
     </main>
     <footer class="py-5 my-5 bg-secondary">
      <Container className='px-4'>
        <p className='text-center text-white'>Copyright@SelpHelpHub2024</p>
      </Container>
     </footer>
    </div>  
    </>
  );
}

export default Frontpage;