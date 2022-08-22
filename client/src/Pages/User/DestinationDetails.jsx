import React from 'react';
import Destination from '../../Components/User/Destination/Destination';
import Navbar from '../../Components/User/Navbar/Navbar';

function DestinationDetails() {
  return (
    <div>
      <Navbar bgColor={'#265299'} />
      <Destination sx={{ mt: 2 }} />
    </div>
  );
}

export default DestinationDetails;
