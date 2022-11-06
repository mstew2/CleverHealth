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
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import React, { useState, useEffect } from 'react';
import "./style.scss"
import axios from "axios";


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
const clientId = '1055346852385-4tkhstuldbesmi1sk47el4fhlvdfaapq.apps.googleusercontent.com';

// useEffect(() => {
//    const initClient = () => {
//          gapi.client.init({
//          clientId: clientId,
//          scope: ''
//        });
//     };
//     gapi.load('client:auth2', initClient);
// });

const onSuccess = (res) => {
  console.log('success:', res);
};
const onFailure = (err) => {
  console.log('failed:', err);
};

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
    path: "/workoutgenerator",
    element: <WG />,
  },  
  {
    path: "/savedworkouts",
    element: <SW />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/healthplan",
    element: <HealthPlan />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
  // //below is google auth
  // const [ profile, setProfile ] = useState([]);
  //   const clientId = '1055346852385-4tkhstuldbesmi1sk47el4fhlvdfaapq.apps.googleusercontent.com';
  //   useEffect(() => {
  //       const initClient = () => {
  //           gapi.client.init({
  //               clientId: clientId,
  //               scope: ''
  //           });
  //       };
  //       gapi.load('client:auth2', initClient);
  //   });

  //   const onSuccess = (res) => {
  //       setProfile(res.profileObj);
  //   };

  //   const onFailure = (err) => {
  //       console.log('failed', err);
  //   };

  //   const logOut = () => {
  //       setProfile(null);
  //   };

  //   return (
  //       <div>
  //         //idk if this is necessary
  //         {/* <Login />
  //         <Logout /> */}
  //         //this above rite here
  //           <h2>React Google Login</h2>
  //           <br />
  //           <br />
  //           {profile ? (
  //               <div>
  //                   <img src={profile.imageUrl} alt="user image" />
  //                   <h3>User Logged in</h3>
  //                   <p>Name: {profile.name}</p>
  //                   <p>Email Address: {profile.email}</p>
  //                   <br />
  //                   <br />
  //                   {/* <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} /> */}
  //               </div>
  //           ) : (
  //               <GoogleLogin
  //                   clientId={clientId}
  //                   buttonText="Sign in with Google"
  //                   onSuccess={onSuccess}
  //                   onFailure={onFailure}
  //                   cookiePolicy={'single_host_origin'}
  //                   isSignedIn={true}
  //               />
  //           )}
  //       </div>
//};
    //below unused is from vid
  // return (
  //   <div className="app">
  //     <div className="container">
  //       <RouterProvider router={router} />
  //     </div>
  //   </div>
  // );
}

export default App;
//https://blog.logrocket.com/guide-adding-google-login-react-app/ for google auth other website