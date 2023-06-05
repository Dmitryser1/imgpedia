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
    let data;
    data = getAllPhotos(1)
    console.log(data)
    user.setImage(data)
    console.log(user)
  };

  useEffect(() => {
    KrutaiaFunction()
  }, [])


  return (
    <div className="home">
      <h1>home</h1>
    {/*<ImageList
      sx={{ width: 1, height: 1 }}
      variant="quilted"
      cols={8}
    >
      {image._photos.map(item => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 120, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
          {console.log(item)}
        </ImageListItem>
      ))}
      </ImageList>*/}
    </div>
  )
};
export default Home