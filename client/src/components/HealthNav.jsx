import Logo from "../img/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function HealthNav() {

  return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Container className="nav">
          <Navbar.Brand href="/dashboard"><img src={Logo} alt="Clever Health logo" className="logo"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard" className="shift-down">Home</Nav.Link>
            <Nav.Link href="/workoutgenerator" className="shift-down">Generator</Nav.Link>
            <Nav.Link href="/savedworkouts" className="shift-down">Saved</Nav.Link>
            <Nav.Link href="/healthplan" className="shift-down">Your Health</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
  );
}

export default HealthNav;