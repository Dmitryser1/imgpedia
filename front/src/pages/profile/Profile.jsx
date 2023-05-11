import './profile.scss';
import * as React from 'react';
import {useParams} from 'react-router-dom';
import bgrimg from '../../assets/bgimg.png';
import anime from '../../assets/anime.jpg';

import Button from '@mui/material/Button';





const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];




  function Profile(){
  
    let {UserId} = useParams();
    return (
      
      <div className = "MainProfileDiv">

          <div className="profile-container">
            <div className="top-portion">
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                <div className="user-profile-bgimg">
                    <img id = "prf-bg-img" src={bgrimg} alt="" srcset=""></img>
                    
                </div>
                <div className="user-profile-img">
                      <img id = "prf-img" src= {anime} alt="" srcset=""></img>
                </div>
                <div className="user-name">
                
                </div>
            </div>
            <div className="botton-portion">
                  <div className="right-side">
                    <div className='griditems'>
                    {itemData.map((item)=>(
                      <div >
                         <img src = {item.img} width="300px"></img>
                          <div>{item.author}</div>
                          <div>{item.title}</div>
                          </div>
                    ))
                    }
                    </div>
                    
                  </div>
                  <div className="left-side">
                    
                  </div>
            </div>
          </div>
      </div>
    )



  }

export default Profile
