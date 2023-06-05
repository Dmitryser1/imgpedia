import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"
import {Avatar, Box } from '@mui/material';
import React , {useContext, useEffect} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { colors } from '@mui/material';
import {observer} from 'mobx-react-lite';
import { Context } from '../../index'
import { getAllPhotos } from "../../http/AlbumAPI";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Home =() => {
  const {user} = useContext(Context);
  const KrutaiaFunction = async () => {
    let data 
    data = await getAllPhotos(1);
    console.log(1)
    console.log(data)
    user.setImage(data)
    console.log(user.getAllImagesfd(1).photo)
  };

  useEffect(() => {
    KrutaiaFunction()
  }, [])


  return (
    <div className="home">
      <h1>home</h1>
    <ImageList
      sx={{ width: 1, height: 1 }}
      variant="quilted"
      cols={8}
    >
        <ImageListItem key={user.getAllImagesfd(1).photo} cols={ 1} rows={ 1}>
          <img
            {...srcset(user.getAllImagesfd(1).photo, 120, 1, 1)}
            loading="lazy"
          />
        </ImageListItem>
      </ImageList>
    </div>
  )
};
export default Home