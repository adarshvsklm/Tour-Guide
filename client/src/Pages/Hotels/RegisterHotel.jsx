import React from 'react';
import HotelRegistrationForm from '../../Components/Hotel/HotelRegistration/HotelRegisterForm';
import Sidebar from '../../Components/Hotel/Sidebar/Sidebar';

function RegisterHotel() {
  return (
    <div>
      <Sidebar>
        <HotelRegistrationForm />
      </Sidebar>
    </div>
  );
}

export default RegisterHotel;
