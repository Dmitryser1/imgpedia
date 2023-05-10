import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={'auto'}>
        <Item> <img
          src="https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
          alt=""
        /></Item>
      </Grid>
      <Grid item xs={'auto'}>
        <Item> <img
          src="https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
          alt=""
        /></Item>
      </Grid>
      <Grid item xs={'auto'}>
        <Item> <img
          src="https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
          alt=""
        /></Item>
      </Grid>
      <Grid item xs={'auto'}>
        <Item> <img
          src="https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
          alt=""
        /></Item>
      </Grid>
      <Grid item xs={'auto'}>
        <Item> <img
          src="https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
          alt=""
        /></Item>
      </Grid>
      <Grid item xs={'auto'}>
        <Item> <img
          src="https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
          alt=""
        /></Item>
      </Grid>
      <Grid item xs={'auto'}>
        <Item> <img
          src="https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
          alt=""
        /></Item>
      </Grid>
      <Grid item xs={'auto'}>
        <Item> <img
          src="https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
          alt=""
        /></Item>
      </Grid>
      
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={'auto'}>
        <Grid container item spacing={'auto'}>
          <FormRow />
        </Grid>
        <Grid container item spacing={'auto'}>
          <FormRow />
        </Grid>
        <Grid container item spacing={'auto'}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}