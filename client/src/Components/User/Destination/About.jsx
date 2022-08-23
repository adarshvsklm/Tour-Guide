import React from 'react'
import Text from '../../Common/Text'

function About({heading,description ,size}) {
  return (
    <div>
       
      <Text text={heading} color='black' size={size}/>
    </div>
  )
}

export default About
