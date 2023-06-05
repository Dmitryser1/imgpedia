import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { HOME_ROUTE, LOGIN_ROUTE, MODER_ROUTE, PROFILE_ROUTE } from "../../utils/consts";
import * as PropTypes from "prop-types";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";
import { createAlbum, updateImage } from "../../http/AlbumAPI";



const Navbar = observer(() => {
  const { toggle, darkMode } = useContext(DarkModeContext)
  const { user } = useContext(Context)
  const {image} = useContext(Context)
  const [GalleryId, setGalleryid] = useState('')
  const [photo, setPhoto] = useState(null)
  const [Mainphoto, setMainphoto] = useState('')
  const [GalleryName, setGalleryname] = useState('')
  const navigation = useNavigate()
  
const handleFileSelect = async(event) => {
  setPhoto(event.target.files[0])
  console.log(user.getUser().role)
};  

  const addPhoto = async () => {
    try{
    let data;
    data = await updateImage(GalleryId, photo)
    console.log(data)
    image.setImage(data)
    console.log(image)
  } catch (e)
      {alert(e.response.data.message)}
  };


  const createGallery = async () => {
    try{
    let data;
    data = await createAlbum(GalleryName,photo)
  } catch (e)
      {alert(e.response.data.message)}
  };

  const handleModer = async () => {
    if(user.getUser().role == 1){
      navigation(MODER_ROUTE +'/'+user.getUserId())
    } else {
      alert("You are not moder bitch")
    }
  }



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
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <Button onClick={()=> handleModer()}>Moderator</Button>
        <input type="galleryid" placeholder="galleryid" value={GalleryId} onChange={e => setGalleryid(e.target.value)} />
        <input type="file" accept="image/*" onChange={handleFileSelect} />
        <Button onClick={() => addPhoto()}> Add </Button>
    
        <input type="galleryname" placeholder="galleryname" value={GalleryName} onChange={e => setGalleryname(e.target.value)} />
        <input type="file" accept="image/*" onChange={handleFileSelect} />

<Button variant="primary" className="mx-3" onClick={() =>createGallery()} >
            Альбом
        </Button>
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
