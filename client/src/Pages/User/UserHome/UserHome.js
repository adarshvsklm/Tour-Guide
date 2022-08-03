import React from 'react'
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from '../../../Components/User/Navbar/Navbar';
import Banner from '../../../Components/User/HomePage/Banner/Banner';
import BottomMenu from '../../../Components/User/BottomMenu/BottomMenu';


function UserHome() {
  return (
    <div>
        <Navbar />
        <Banner />
        <BottomMenu />
     </div>
  )
}

export default UserHome
