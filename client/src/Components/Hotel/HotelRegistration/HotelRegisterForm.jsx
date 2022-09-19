import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';
import { DropzoneArea } from 'material-ui-dropzone';
import { useState } from 'react';
import axios from 'axios';
import { serverUrl } from '../../../serverUrl';
import { useNavigate } from 'react-router-dom';

export default function HotelRegistrationForm() {
  const [image, setImage] = useState();
  const [form,setForm] =useState()
  const urls=[]
  const navigate = useNavigate()

  const File = (e) => {
    console.log(e);
    setImage(e);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    // formData.append('file', image);
    // formData.append('upload_preset', 'aadharCard_mySpace');
    // console.log(formData);

    try{
      for(let i=0;i<image.length;i++) {
        formData.append('file', image[i]);
        formData.append('upload_preset', 'aadharCard_mySpace');
        console.log(formData);
  
        let response=await axios.post('https://api.cloudinary.com/v1_1/dwzlm4vnj/image/upload', formData)
        urls.push(response.data.secure_url)
      }
      console.log(urls,'urlssssss');
      setForm({...form,images:urls})
      axios.post(`${serverUrl}/hotel/registerHotel`,{...form},{withCredentials:true})
      .then((res)=>{
        //redirect
        navigate('/hotel/dashboard')
      })
      .catch((err)=>{
        //some error occured try again refresh the page
        navigate('/hotel/RegisterHotel')
      })

    }catch(err){
      console.log(err);
    }
  };

  return (
    <>
      <h3>Register Hotel</h3> <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component='form'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
            noValidate
            autoComplete='off'
          >
            <TextField
              id='outlined-basic'
              label='Hotel Name'
              variant='outlined'
              onChange={(e)=>setForm({...form,name:e.target.value})}
            />

            <TextField id='outlined-basic' label='Address' variant='outlined' />
            <TextField
              multiline={true}
              minRows={3}
              id='outlined-basic'
              label='Number Of Rooms'
              variant='outlined'
              onChange={(e)=>setForm({...form,numberOfRooms:e.target.value})}
            />
            <TextField
              multiline={true}
              minRows={3}
              id='outlined-basic'
              label='Description'
              variant='outlined'
              onChange={(e)=>setForm({...form,description:e.target.value})}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component='form'
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
            noValidate
            autoComplete='off'
          >
            <TextField
              multiline={true}
              minRows={3}
              id='outlined-basic'
              label='Amenities'
              variant='outlined'
              onChange={(e)=>setForm({...form,amenities:e.target.value})}
            />
            <TextField
              multiline={true}
              minRows={3}
              id='outlined-basic'
              label='Rules'
              variant='outlined'
              onChange={(e)=>setForm({...form,rules:e.target.value})}
            />

            <TextField
              id='outlined-basic'
              label='Latitude'
              variant='outlined'
              onChange={(e)=>setForm({...form,latitude:e.target.value})}
            />
            <TextField
              id='outlined-basic'
              label='Longitude'
              variant='outlined'
              onChange={(e)=>setForm({...form,longitude:e.target.value})}
            />
          </Box>
        </Grid>
      </Grid>
      <div style={{ width: '60%', margin: 'auto', textAlign: 'center' }}>
        <h3>Upload Images</h3>
        <DropzoneArea onChange={File} />
      </div>
      <div
        style={{
          width: '121px',
          margin: 'auto',
          marginTop: '10px',
          marginBottom: '30px',
        }}
      >
        <Button onClick={handleSubmit} variant='contained'>
          Add Hotel
        </Button>
      </div>
    </>
  );
}
