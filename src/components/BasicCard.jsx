

import * as React from 'react';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';




export default function BasicCard(props) {
  //sx={{ minWidth: 275 }} 
  return (
    <Card sx={{ maxWidth: 345 ,maxHeight: 550 }}>
      <CardContent>
      <CardMedia
        component="img"
        image={props.direccion}
        alt={props.alt}
        sx={{ height: '400px' }}
      />

        <Typography variant="h5" component="div" sx={{ minHeight: '50px' }}>
         {props.titulo}
        </Typography>

      </CardContent>
    </Card>
  );
}