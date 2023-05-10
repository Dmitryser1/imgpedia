import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { colors } from '@mui/material';

export default function TitlebarImageList() {
  return (
    <ImageList 
      sx={{ width: 1, height: 1 }}

    >
      <ImageListItem  cols={10}>
      </ImageListItem>
      {itemData.map((item) => (
        
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            onClick={"window.open(this.src)"}
          />
          <ImageListItemBar
            sx={{background:'rgba(0,0,0,0)'}}
            title={item.title}
            subtitle={item.author}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  }, 
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
  {
    img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
    title: 'Pic_name',
    author: '@author',
  },
];