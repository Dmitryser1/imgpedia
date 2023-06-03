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
import { observer } from "mobx-react-lite";
import {Context} from "./index";
import {Spinner} from "react-bootstrap";
import { check, getAllUsers } from "./http/userAPI";

const App = observer(() => {

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
      </div>
    );
  };
  /*const {user} = useContext(Context)
  const[loading,setLoading]=useState(true)
  const authToken = localStorage.getItem('token');
  useEffect(() => {
      const intervalId = setInterval(() => {
          try {
              Promise.all([
                  getAllUsers(),
                  check(authToken),
              ]).then(([users, userData]) => {
                  user.setUsers(users);
                  if (userData) {
                      user.setUser(userData);
                      user.setIsAuth(true);
                  } else {
                      console.error('Данные пользователя не получены');
                  }
              }).finally(() => setLoading(false));
          } catch (e) {
              console.error('Ошибка при вызове функции check:', e);
          }
      }, 1000);

      return () => {
          clearInterval(intervalId);
      };
  }, []);

  if (loading) {
      return <Spinner animation="grow" />;
  }

  if (loading){
      return <Spinner animation ={"grow"}></Spinner>
  }
*/

  return (
      <BrowserRouter>
        <Layout/>
        <AppRouter/>
      </BrowserRouter>
  );
})

export default App;