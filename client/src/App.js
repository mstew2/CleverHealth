import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
//import {DropDown} from "./pages/WorkoutGeneratorComponents"
import WG from "./pages/Workout_Generator";
import Home from "./pages/Home";
import SW from "./pages/Saved_Workouts";
import HealthPlan from "./pages/HealthPlan";
import About from "./pages/Saved_Workouts";
import HealthNav from "./components/HealthNav";
import Footer from "./components/Footer";
import "./style.scss"
import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

const Layout = () => {
  return (
    <>
      <HealthNav sticky="top"/>
      <Outlet />
      <Footer />
    </>
  );
};

//google auth
const clientId = '1055346852385-4tkhstuldbesmi1sk47el4fhlvdfaapq.apps.googleusercontent.com';

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
      {
        path: "/healthplan",
        element: <HealthPlan />,
      },

      {
        path: "/workoutgenerator",
        element: <WG />,
      },
      {
        path: "/savedworkouts",
        element: <SW />,
        },
    ],
  },
  // {
  //   element: <Layout />,
  //   children: [
  //     {
  //     path: "/workoutgenerator",
  //     element: <WG />,
  //     },
  //   ],
  // },  
  // {
  //   element: <HealthNav />,
  //   children: [
  //     {
  //     path: "/savedworkouts",
  //     element: <SW />,
  //     },
  //   ],
  // },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
//https://blog.logrocket.com/guide-adding-google-login-react-app/ for google auth other website