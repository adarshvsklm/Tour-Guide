import React from 'react';
 import Destination from '../../Components/User/Destination/Destination';
import Navbar from '../../Components/User/Navbar/Navbar';

function DestinationDetails() {
  return (
    <div>
      <Navbar bgColor={'#265299'} style={{position:"absolute",zIndex:'1000'}} />
      <Destination />
    </div>
  );
}

export default DestinationDetails;
