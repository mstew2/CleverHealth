import React, {useEffect, useState} from "react";

const Home = () => {
  const [quotes, setQuotes] = useState([]);

  async function getQuote(){
    await fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(data => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum])})
      .catch(e => 
        console.log(e)
      )
  }

  useEffect(() => {
    getQuote();

 }, [])
  
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