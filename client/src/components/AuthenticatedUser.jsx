import React from 'react';
import Card from './Card';
import LogoutIcon from '../assets/logout.svg';
import logOut from '../utils/logOut';
import { useEffect, useState } from "react";

const AuthenticatedUser = ({ user }) => {
  const [quotes, setQuotes] = useState([]);
  
  async function getQuote(){
    try{
      await fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(data => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]); 
    })
    }
    catch(err){
      console.log(err);
    } 
  }

 useEffect(() => {
  getQuote();

 },[])

  return (
      <div>   
      <p className="pageTitle"> Welcome {user.displayName}</p>
        <div className="content">
        <div className="home">
        <div className="content">
          <div className="quote">
            <p>"{quotes.text}"</p>
            <p>-{quotes.author}</p>
            <button onClick={getQuote}className="button">
              <span>New Quote</span>
            </button> 
            </div>
          </div>
        </div>
          <pre></pre>
        </div>

      <Card
        img={LogoutIcon}
        txt={'Logout'}
        color={'white'}
        fcn={() => logOut()}
      />
</div>
  );
};

export default AuthenticatedUser;
