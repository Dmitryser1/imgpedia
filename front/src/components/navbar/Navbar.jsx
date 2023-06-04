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
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from "../../utils/consts";
import * as PropTypes from "prop-types";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";
import { createAlbum, createImage } from "../../http/AlbumAPI";


function Raw(props) {
  return null;
}

Raw.PropTypes = {children: PropTypes.node};

const Navbar = observer(() => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { user } = useContext(Context);
  const {image} = useContext(Context)
  const [GalleryId, setGalleryid] = useState('')
  const [photo, setPhoto] = useState('')
  const [Mainphoto, setMainphoto] = useState('')
  const [GalleryName, setGalleryname] = useState('')


  const addPhoto = async () => {
    try{
    let data;
    data = await createImage(GalleryId, photo)
    console.log(data, 'addphoto')
    image.setImage(data)
  } catch (e)
      {alert(e.response.data.message)}
  };
  const createGallery = async () => {
    try{
    let data;
    data = await createAlbum(GalleryName,Mainphoto)
    image.setAlbum(data)
  } catch (e)
      {alert(e.response.data.message)}
  };
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
        <input type="galleryid" placeholder="galleryid" value={GalleryId} onChange={e => setGalleryid(e.target.value)} />
          <input type="photo" placeholder="photo" value={photo} onChange={e => setPhoto(e.target.value)} />
        <Button onClick={() => addPhoto()}> Add </Button>
        <input type="galleryname" placeholder="galleryname" value={GalleryName} onChange={e => setGalleryname(e.target.value)} />
        <input type="photo" placeholder="photo" value={Mainphoto} onChange={e => setMainphoto(e.target.value)} />
        <Button onClick={() => createGallery()}> Create</Button>
      </div>
      <div className="right">
        <div className="user">
        <Link to={PROFILE_ROUTE+'/'+user.getUserId()} style={{ textDecoration: "none" }}>
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
