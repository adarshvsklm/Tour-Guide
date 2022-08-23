import React from 'react'
import Attraction from '../../Components/User/Attractions/Attraction'
import Navbar from '../../Components/User/Navbar/Navbar'
 
function AttractionDetails() {
  return (
    <div>
      <Navbar bgColor={'#265299'} style={{position:"absolute",zIndex:'1000'}} />
      <Attraction />
    </div>
  )
}

export default AttractionDetails
