import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import LogoutIcon from '../assets/logout.svg';
import TerminalTitleBar from './TerminalTitleBar';
import { StyledTerminal } from './style';
import logOut from '../utils/logOut';
import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const StyledAuthenticatedUser = styled.div`
  .terminalTitle {
    font-size: 16px;
    font-weight: bold;
  }
`;

const AuthenticatedUser = ({ user }) => {
  const [quotes, setQuotes] = useState([]);
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [cat]);
  
  const getQuote = () => {
      try{
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data => {
          let randomNum = Math.floor(Math.random() * data.length);
          setQuotes(data[randomNum]); 
      })
      //.catch
      }
      catch(err){
        console.log(err);
      }
      
  }

 useEffect(() => {
  getQuote();

 },[])

//use styledTerminal for getting user ID

  return (
    // <StyledAuthenticatedUser>
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
          <pre className="terminalTitle">
            Personal{' '}
            {user.provider[0].toUpperCase() + user.provider.substring(1)}{' '}
            Account Information
          </pre>
          {Object.keys(user).map((key) => {
            return (
              <pre>
                <b>{key}</b>: {user[key]}
              </pre>
            );
          })}
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
