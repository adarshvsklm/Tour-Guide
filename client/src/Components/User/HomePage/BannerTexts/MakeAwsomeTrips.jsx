import { createTheme, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Nunito',
    margin :'0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorText: {
    color: '#5AFF3D',
    boxShadow :12
  },
  title: {
    flexGrow: '1',
  },
  position :{
    
  }
}));

const theme = createTheme();

theme.typography.h2 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};

function MakeAwsomeTrips() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Typography
          className={classes.title}
          variant='h2'  
          noWrap
          color='white'
          // component='a'
          href=''
          // sx={{
          //   mr: 2,
          // //   display: { xs: 'flex', md: 'none' },
          //   flexGrow: 1,
          //   // fontFamily: 'monospace',
          //   fontWeight: 700,
          //   color: 'inherit',
          // }}
        >
          <span  >Make Awesome</span>
           <span className={classes.colorText}>Trips</span>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default MakeAwsomeTrips;
