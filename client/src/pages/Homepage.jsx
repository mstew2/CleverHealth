import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, renderMatches, useLocation } from "react-router-dom";
import CardList from '../components/CardList';
//import {Quotes} from "../components/Quotes";
//import App from "../App.css"
import axios from "axios"
//import image from "https://pngtree.com/freebackground/fitness-exercise-run-banner-background_1120513.html"


const Home = () => {
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
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  //const homePic = new URL ("../img/CleverHealthoption.jpg", import.meta.url)
  
  return (
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
  );
};

export default Home;
//i dont think we need a login page because of the google auth