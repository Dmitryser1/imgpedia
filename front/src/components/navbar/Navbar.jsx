import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { HOME_ROUTE } from "../../utils/consts";
import { Context } from "../..";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { user } = useContext(Context);

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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
