import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { colors } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 1, height: 1 }}
      variant="quilted"
      cols={8}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 120, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
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
    rows: 2,
    cols: 2,
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
    rows: 2,
    cols: 2,
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
    rows: 2,
    cols: 2,
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
    rows: 2,
    cols: 2,
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