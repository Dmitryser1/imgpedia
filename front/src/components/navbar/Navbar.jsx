import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { HOME_ROUTE, LOGIN_ROUTE } from "../../utils/consts";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";

const Navbar = observer(() => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { user } = useContext(Context);
  const navigate = useNavigate()
  const logOut = ()=>{
      localStorage.removeItem('token');
      user.setUser({})
      user.setIsAuth(false)
      navigate(LOGIN_ROUTE)
      window.location.reload()
}

  return (
    <div className="navbar">
      <div className="left">
        <Link to={HOME_ROUTE} style={{ textDecoration: "none" }}>
          <span>Home</span>
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <div className="user">
        <Link to="/profile/1" style={{ textDecoration: "none" }}>
          <img
            src={user.profilePic}
            alt=""
          />
        </Link>
          <span>{user.name}</span>
          <Button variant={"outline-info"} className="ms-2" onClick={() => logOut()}>Log out</Button>
        </div>
      </div>
    </div>
  );
});

export default Navbar;
