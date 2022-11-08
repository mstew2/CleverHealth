import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

const Navbar = () => {

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
    <div className="navbar">
      
        <div className="leftSide">
        <Link to="/">
        <img src={Logo} alt="" />
        </Link>
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/workoutgenerator">Generator</Link>
          <Link to="/account">Account</Link>
          <Link to="/healthplan">Diet</Link>
          <Link to="/about">About</Link>
          {/* WHY ISNT THE SIGN OUT BUTTON SHOWING ????????????? */}
          {/* gotta do a refreshToken system to save the account on the page ! Do this once the db is set up*/}
          </div>
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
    </div>
  );
};

export default Navbar;