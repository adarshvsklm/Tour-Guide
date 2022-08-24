import { createTheme, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles((theme) => ({
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
  fontSize: '.9rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },
};

function Text({text,size ,color='#1ec700'}) {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography
          className={classes.title}
          variant='h2'  
          noWrap
          color={color}
        >
          <span  >{text}</span>
            
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default Text;
