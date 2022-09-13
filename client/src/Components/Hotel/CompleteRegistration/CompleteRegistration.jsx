import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FileUpload from '../../Common/FileUpload';
import { Button } from '@mui/material';
import { useState } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import axios from 'axios';
import { serverUrl } from '../../../serverUrl';
import { useNavigate } from 'react-router-dom';

function CompleteRegistration() {
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'aadharCard_mySpace');
    console.log(formData);
    axios
      .post('https://api.cloudinary.com/v1_1/dwzlm4vnj/image/upload', formData)
      .then((res) => {
        // console.log(res);
        // console.log(res.data.secure_url);
        axios
          .post(`${serverUrl}/hotel/completeReg`, { url: res.data.secure_url },{withCredentials: true})
          .then((response) => {
            navigate('/hotel/dashboard');
            console.log(response);
          })
          .catch(async(err) => {
            console.log(err);
            console.log(err.response.data.message );
            if (err.response.data.message == 'Token error') {
             await axios.get(`${serverUrl}/hotel/logout`)
              navigate('/hotel/login')
            }else{
              console.log(err);
            }
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const File = (e) => {
    console.log(e[0]);
    setImage(e[0]);
  };
  return (
    <div
      className='mx-auto container align-center '
      style={{ width: '80%', margin: '0 auto', alignItems: 'center' }}
    >
      <h3>Complete registration</h3>
      <label>Upload Aadhaar card</label>
      <br />
      {/* <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        
        <TextField fullWidth label='Aadhaar card number' id='fullWidth' />

    </Box> */}
      {/* <FileUpload  saveFile={File}/> */}
      <DropzoneArea onChange={File} />
      <Button onClick={handleSubmit}>Upload</Button>
    </div>
  );
}

export default CompleteRegistration;
