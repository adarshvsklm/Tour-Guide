import { makeStyles } from '@material-ui/core';
import React from 'react';
import MainCarousel from '../../Common/MainCarousel';
 

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Nunito',
  },
  colorText: {
    color: '#1ec700',
  },
}));
function Destination() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.colorText}>Explore</h1>
      <h1>Hyderabad</h1>
      <MainCarousel />
       
    </div>
  );
}

export default Destination;
