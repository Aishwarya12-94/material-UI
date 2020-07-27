import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Button variant="contained" color="primary" size="small">
        Log In
      </Button>
      <Button variant="contained" color="secondary" size="small">
        Log Out
      </Button>
      <Button size="large">
        help
      </Button>
     
    </div>
  );
}

