import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";
import GoogleButton from 'react-google-button'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

function HealthNav() {
  const [user, setUser] = useState({});

  //   const { currentUser, logout } = useContext(AuthContext);
  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '1055346852385-4tkhstuldbesmi1sk47el4fhlvdfaapq.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    //google.accounts.id.prompt(); /* if you want to prompt a sign in on first visit to the page */
  }, []);

  return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Container className="nav">
          <Navbar.Brand href="/"><img src={Logo} alt="Clever Health logo" className="logo"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="shift-down">Home</Nav.Link>
            <Nav.Link href="/workoutgenerator" className="shift-down">Generator</Nav.Link>
            <Nav.Link href="/savedworkouts" className="shift-down">Saved</Nav.Link>
            <Nav.Link href="/healthplan" className="shift-down">Your Health</Nav.Link>
          </Nav>
        </Container>
        <div className = "account">
            <div id="signInDiv"></div>
            { user && 
              <div>
              <h4>{user.name}</h4>
            </div>
          }
        { Object.keys(user).length != 0 &&
            <button onClick= {(e) => handleSignOut(e)}>Sign Out</button>
          }
        </div> 
      </Navbar>
  );
}

export default HealthNav;