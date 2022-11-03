import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";
import GoogleButton from 'react-google-button'


const Navbar = () => {
//   const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
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
          {/* <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span> */}
      
            <Link className="sw" to="/savedworkouts">
            <GoogleButton onClick={() => { console.log('Google button clicked') }} />
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;