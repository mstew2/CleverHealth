import React from "react";
import {useContext, useState} from "react";
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import UserProvider from "../contexts/UserProvider";
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';


const SW = () => {
  
  const [counter, setCounter] = useState(0);
  const increase = () =>{
    setCounter(count=>count+1);

  };
  //data variable holds all the workouts generated 
  let data = []
  const userData = useContext(UserProvider.Context);
  if (userData) {
    axios.get("http://localhost:5001/workout/get/" + userData.providerId).then(resp => {
      console.log(resp);
      data = resp.data
    });
  }
  
  /* The below code maps through the workouts and makes a table for each workout and stores it in a carousel */
  let i = 1;
  function workoutgen(){
    if(userData.workouts != undefined){
    return (
      <div>
        <div className="saved">
          <h1>Your Fitness Plan</h1>
          <Carousel>
          {(userData.workouts).map(workout =>
          <Carousel.Item>
      <Table striped bordered hover size = "sm">
      <thead>
          <tr>
            <th>Workout</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          
          {workout.map(params => 
          <tr>  
           <td>{params.name}</td>
           <td>{params.sets}</td>
           <td>{params.reps}</td> 
          </tr>
             )}   
        </tbody>  
      </Table>
      </Carousel.Item>
      
      )} 
      </Carousel> 
      </div>
      </div>
      
      
    );
  }
  else{
    return(
      <div>
        <div className="saved">
          <h1>No workouts yet!</h1>
        </div>
      </div>
    )
  }

  }

console.log(userData.workouts)

  return (
    workoutgen()
  )
     
  

}

export default SW;
