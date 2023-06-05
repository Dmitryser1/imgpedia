import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"
import { Avatar, Box } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { colors } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index'
import { getAllAlbums, getAllPhotos } from "../../http/AlbumAPI";
import { Navigate, useNavigate } from "react-router-dom";
import { ALBUM_ROUTE } from "../../utils/consts";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Home = () => {
  const { user } = useContext(Context);
  const [albums, setAlbums] = useState([])
  const navigate = useNavigate();

  const KrutaiaFunction = async () => {
    let data
    data = await getAllAlbums();
    console.log(data)
    user.setAlbum(data)
    console.log(user)
    let len = (user.getAlbum().length)
    console.log(len)
    console.log(user.getAlbum()[0].Mainphoto)
    var albums = []
    for (var i = 0; i < len; i += 1) {
      console.log(i)
      albums.push(user.getAlbum()[i])
    }
    setAlbums(albums)
    console.log(albums)
    console.log(user.getAlbum())

  };


  useEffect(() => {
    KrutaiaFunction()
  }, [])


  return (
    <ImageList
      sx={{ width: 1, height: 1 }}
      variant="quilted"
      cols={8}
    >
      {albums.map((item) => (
        <ImageListItem onClick={()=> navigate(ALBUM_ROUTE+ '/' + item.id)} key={`http://localhost:5000/${item.Mainphoto}`} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            src={`http://localhost:5000/${item.Mainphoto}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`http://localhost:5000/${item.Mainphoto}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
};
export default Home