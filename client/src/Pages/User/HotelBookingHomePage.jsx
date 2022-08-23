import React from 'react';
import HotelSearchBar from '../../Components/User/HotelSearchBar/HotelSearchBar';
import Navbar from '../../Components/User/Navbar/Navbar';

function HotelBookingHomePage() {
  return (
    <div>
      <Navbar
        bgColor={'#265299'}
        style={{ position: 'absolute', zIndex: '1000' }}
      />
      
      <HotelSearchBar />
    </div>
  );
}

export default HotelBookingHomePage;
