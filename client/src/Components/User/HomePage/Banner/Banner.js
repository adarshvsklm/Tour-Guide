// import React from 'react'

// function Banner() {
//   return (
//     <div style={{marginTop:'10px', backgroundPosition: 'center', backgroundImage:'url(https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80)',height:'500px',width:'100%',backgroundRepeat: 'no-repeat' }}>
//       hellooooooooooo
//     </div>
//   )
// }

// export default Banner

// import { makeStyles } from '@mui/material'
 import { Collapse, CssBaseline } from '@mui/material';
 import {makeStyles} from '@mui/styles'
import React, { useEffect, useState } from 'react';
import MakeAwsomeTrips from '../BannerTexts/MakeAwsomeTrips';
import SearchBar from '../SearchBar/SearchBar';
import BookData from './Data.json';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'black',
  },
  colorText: {
    color: '#5AFF3D',
  },
}));

function Banner() {
  const classes = useStyles();
  const [checked,setChecked] = useState()

  useEffect(()=>{
    setChecked(true)
  })
  return (
    <div className={classes.root}>
      <Collapse in={checked}
      {...(checked ? {timeout :1000}:{})} 
      collapseHeight={0}
      >
        <MakeAwsomeTrips />
        <SearchBar placeholder='Enter A Book Name' data={BookData} />
       </Collapse>
      <CssBaseline />
    </div>
  );
}

export default Banner;
