import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  
const UserPhoto = ({ photo, fallbackSrc, width, height, style }) => {
    return (
        <Col>
            {photo ? (
                <img src={`http://localhost:5000/${photo}`} width={width} height={height} style={style} />
            ) : (
                <img src={fallbackSrc} width={width} height={height} style={style} />
            )}
        </Col>
    );
};

export default UserPhoto;