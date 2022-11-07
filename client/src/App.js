import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import WG from "./pages/Workout_Generator";
import Home from "./pages/Home";
import SW from "./pages/Saved_Workouts";
import HealthPlan from "./pages/Saved_Workouts";
import About from "./pages/Saved_Workouts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

//google auth


//below from video
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <Navbar />,
    children: [
      {
      path: "/workoutgenerator",
      element: <WG />,
      },
    ],
  },  
  {
    element: <Navbar />,
    children: [
      {
      path: "/savedworkouts",
      element: <SW />,
      },
    ],
  },
  {
    element: <Navbar />,
    children: [
      {
      path: "/about",
      element: <About />,
      },
    ],
  },
  {
    element: <Navbar />,
    children: [
      {
      path: "/healthplan",
      element: <HealthPlan />,
      },
    ],
  },
]);

function App() {
  //google auth below
  const [user, setUser] = useState({});

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  
  useEffect(() => {
    /* global google */
     google.accounts.id.initialize({
      client_id: '1055346852385-4tkhstuldbesmi1sk47el4fhlvdfaapq.apps.googleusercontent.com',
      callback: handleCallbackResponse
     });
     google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
     );
  
     //google.accounts.id.prompt(); /* if you want to prompt a sign in on first visit to the page */
  }, []);
  //if we have no user: sign in button
  //if we have a user: sign out button

  return (
    <div className="app">
      <div id="signInDiv"></div>
      { Object.keys(user).length != 0 &&
        <button onClick= {(e) => handleSignOut(e)}>Sign Out</button>

      }
      { user && 
        <div>
          <img src= {user.picture}></img>
          <h3>{user.name}</h3>
        </div>
      }
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
//https://blog.logrocket.com/guide-adding-google-login-react-app/ for google auth other website