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
import { makeStyles } from '@material-ui/styles';
import { Collapse, CssBaseline } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BookData from './Data.json';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0, 0, 0, 0.19)',
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
      collapseHeight={50}
      >
        <SearchBar placeholder='Enter A Book Name' data={BookData} />
       </Collapse>
      <CssBaseline />
    </div>
  );
}

export default Banner;
