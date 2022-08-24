import {makeStyles} from '@mui/styles'
 import React from 'react'

const useStyles= makeStyles((theme)=>({
  textStyle:{
    // fontFamily:"Nunito",
    // fontWeight :200
    margin:"5%"
  }
}))

function Paragraph({text}) {
  const classess = useStyles()
  return (
    <div className={classess.textStyle}>
      <p>

      {text}
      </p>
    </div>
  )
}

export default Paragraph
