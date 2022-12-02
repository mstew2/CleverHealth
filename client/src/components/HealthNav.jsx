import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";
import GoogleButton from 'react-google-button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HealthNav() {
  return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Container className="nav">
          <Navbar.Brand href="/"><img src={Logo} alt="Clever Health logo" className="logo"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="shift-down">Home</Nav.Link>
            <Nav.Link href="/workoutgenerator" className="shift-down">Generator</Nav.Link>
            <Nav.Link href="/savedworkouts" className="shift-down">Saved</Nav.Link>
            <Nav.Link href="/healthplan" className="shift-down">Your Health</Nav.Link>
            <Nav.Link><GoogleButton className="google-button" onClick={() => {
           console.log('Google button clicked') }} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}


//const Navbar = () => {
//   const { currentUser, logout } = useContext(AuthContext);

//   return (
//     <div className="navbar">
//         <div className="leftSide">
//         <Link to="/">
//         <img src={Logo} alt="" />
//         </Link>
//         </div>
//         <div className="rightSide">
//           <Link to="/">Home</Link>
//           <Link to="/workoutgenerator">Generator</Link>
//           <Link to="/savedworkouts">Saved</Link>
//           <Link to="/healthplan">Health info</Link>
//           <Link to="/about">About</Link>
//           <GoogleButton onClick={() => {
//             console.log('Google button clicked') }} />
       
//         </div>
      
//     </div>
//   );
// };

export default HealthNav;