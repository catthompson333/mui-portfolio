import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Button href={deployedLink} target="_blank">View App</Button>
        <Button href={repoLink} target="_blank">View Code</Button>
      </CardContent>
    </Card>
  );
}

export default Project;
