import React from "react";
import {useeffect, useState} from "react";
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';


function SW(){
  //array of workout objects
  const [workouts, setWorkouts] = useState([{
    name: '',
    sets: '',
    reps: ''
  }])

  //fetches data from fetch link that is TBD
  useEffect(()=>{
    fetch("/<TBD>").then(res=>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonRes=>setWorkouts(jsonRes));
  })

  return (
    <div>
      <div className="saved">
        <h1>Your Fitness Plan</h1>
    <Table striped bordered hover size = "sm">
    <thead>
        <tr>
          <th>Workout</th>
          <th>Sets</th>
          <th>Reps</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map(workout =>
         <tr>
          <td>{workout.name}</td>
          <td>{workout.sets}</td>
          <td>{workout.reps}</td>
        </tr>
          )}    
      </tbody>  
    </Table> 
    </div>
    </div>
    
    
  );

}

export default SW;