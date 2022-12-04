import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
//import {DropDown} from "./pages/WorkoutGeneratorComponents"
import WG from "./pages/Workout_Generator";
import Home from "./pages/Home";
import Homepage from "./pages/Homepage";
import SW from "./pages/Saved_Workouts";
import HealthPlan from "./pages/HealthPlan";
import About from "./pages/Saved_Workouts";
import HealthNav from "./components/HealthNav";
import Footer from "./components/Footer";
import "./style.scss"
import React, { useEffect, useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import UserProvider from './contexts/UserProvider';
import Dashboard from './pages/Dashboard';

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
//const clientId = '1055346852385-4tkhstuldbesmi1sk47el4fhlvdfaapq.apps.googleusercontent.com';

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
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/homepage",
        element: <Homepage />,
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

        {/* <BrowserRouter>
      <UserProvider>
        <Route path="/dashboard" component={Dashboard} />
      </UserProvider>
      <Route path="/" exact component={Home} />
    </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;