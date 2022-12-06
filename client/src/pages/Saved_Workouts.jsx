import React, {useContext, useState} from "react";
import Table from 'react-bootstrap/Table';
import UserProvider from "../contexts/UserProvider";
import Carousel from 'react-bootstrap/Carousel';

const SW = () => {
  //data variable holds all the workouts generated 
  const userData = useContext(UserProvider.Context);
  function refreshPage() {
    window.location.reload(false);
  }
  /* The below code maps through the workouts and makes a table for each workout and stores it in a carousel */
  function workoutgen(){
    if(userData !== null){
      if(userData.workouts.length)
      {
    return (
      <div>
        <div className="saved">
          <h1>Your Fitness Plan</h1>
          <Carousel>
          {(userData.workouts).map(workout =>
          <Carousel.Item interval = {null}>
            <Table striped bordered hover size = "sm">
              <thead>
                <tr>
                  <th>Workout</th>
                  <th>Sets</th>
                  <th>Reps</th>
                  <th>Muscle Group</th>
                </tr>
              </thead>
              <tbody>
                {workout.map(params => 
                <tr>  
                <td>{params.name}</td>
                <td>{params.sets}</td>
                <td>{params.reps}</td>
                <td>{params.bodyPart}</td>  
                </tr>
                  )}   
              </tbody>  
            </Table>
          </Carousel.Item >
          )} 
          </Carousel>
          <div style = {{height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'}}
            >
            <button style = {{background: 'rgba(245, 245, 245, 0.661)'}} onClick={refreshPage}>Click to reload</button>
          </div> 
        </div>
      </div>
    );   
    }
    else{
      return(
        <div>
          <div className="saved">
            <h1>No workouts yet!</h1>
            <div style = {{height: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'}}
            >
          <button style = {{background: 'rgba(245, 245, 245, 0.661)'}} onClick={refreshPage}>Click to reload</button>
          </div>
          </div>
        </div>
      )
    }
  }
  else{
    return(
      <div>
        <div className="saved">
          <h1>You must Login first!</h1>
        </div>
      </div>
    )
  }
  }



  return (
    workoutgen()
  )
     
  

}

export default SW;
