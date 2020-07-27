import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3kENQmku_jlSsds-zPSXGeNDkSAwKbeYf8A&usqp=CAU://www.ssa-frontend.com/media/1164/react.png"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           React Js
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          React is an open-source JavaScript library for building user interfaces. It is maintained by 
          Facebook and a community of individual developers and companies. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
