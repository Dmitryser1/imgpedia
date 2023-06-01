import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Error from "./pages/error/Error_page";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Moder from "./pages/moder/Moder";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import Album from "./pages/album/Album";
import AppRouter from "./components/AppRouter";

function App() {

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
      </div>
    );
  };

  return (
      <BrowserRouter>
        <Layout>
        <AppRouter/>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
