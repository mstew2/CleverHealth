import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, renderMatches, useLocation } from "react-router-dom";
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
  

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];

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
          <span>New quote</span>
          </button> 
        </div>
        
      </div>
    </div>
  );
};

export default Home;
//i dont think we need a login page because of the google auth
/*{posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}*/