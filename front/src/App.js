import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import Error from "./pages/error/Error_page";
import "./style.scss";
import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
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
        <Layout/>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;