import React from "react";
import {useeffect, useState} from "react";
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import UserProvider from "../contexts/UserProvider";
import {useContext} from "react";


const SW = () => {
  //array of workout objects
  const [workouts, setWorkouts] = useState([{
    name: '',
    sets: '',
    reps: ''
  }])
  const userData=useContext(UserProvider.Context);

  //sends user info to database and waits for user-specific data to be returned
  const sendRequest = async () => {
    const res = await axios.get("http://localhost:5001/workout/"+userData.providerID)
    const data = await res.data;
    return data
  }
  useEffect(() => {
    sendRequest().then((data)=>setWorkouts(data.workouts))
  }, [])

  console.log(workouts);

  
  const WorkoutGen =()=>{
    //if workouts array is not empty, below code is returned and workouts are projected
    if(workouts.length>1){
      return(
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
        )           

    }
    else{
      //if workouts array is empty
      return(
        <div className="saved">
        <h1>No workouts yet!</h1>
      </div>
      )

    }

  }

  return (
    <div>
      <WorkoutGen/>
    </div>   
  );

}

export default SW;
