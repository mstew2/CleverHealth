import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import WG from "./pages/Workout_Generator";
import Home from "./pages/Home";
import Account from "./pages/Account";
import HealthPlan from "./pages/Account";
import About from "./pages/Account";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
      path: "/account",
      element: <Account />,
      },
    ],
  },
  {
    element: <Navbar />,
    children: [
      {
      path: "/account",
      element: <Account />,
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