import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";
import GoogleButton from 'react-google-button'


const Navbar = () => {
//   const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
        <div className="leftSide">
        <img src={Logo} alt="" />
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/workoutgenerator">Generator</Link>
          <Link to="/savedworkouts">Saved</Link>
          <Link to="/healthplan">Diet</Link>
          <Link to="/about">About</Link>
          <GoogleButton onClick={() => {
            console.log('Google button clicked') }} />
       
        </div>
      
    </div>
  );
};

/*
 <div className="links">
          <Link className="link" to="/workoutgenerator">
            <h6>GENERATOR</h6>
          </Link>
          <Link className="link" to="/savedworkouts">
            <h6>SAVED</h6>
          </Link>
          <Link className="link" to="/healthplan">
            <h6>DIET</h6>
          </Link>
          <Link className="link" to="/about">
            <h6>ABOUT</h6>
          </Link>
          { <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>}
      
            <Link className="sw" to="/savedworkouts">
            <GoogleButton onClick={() => { console.log('Google button clicked') }} />
            </Link>
          
        </div>
        */

export default Navbar;