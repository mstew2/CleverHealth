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
    <div className="table">
    <Table striped bordered hover>
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
          <div className="align-me">
          <td>{workout.name}</td>
          <td>{workout.sets}</td>
          <td>{workout.reps}</td>
          </div>
        </tr>
          )}    
      </tbody>
    </Table>
    </div>
    
  )

}

export default SW;
 
