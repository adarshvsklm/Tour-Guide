import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Otp from './otp'; 
import axios from 'axios';
import { serverUrl } from '../../../serverUrl';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Verification(props) {
    console.log(8765432345678);
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOtp = (otpNumber)=>{
    props.saveOtp(otpNumber)
  }


  React.useEffect(async()=>{
    console.log("-----------");
    // const response= await axios.post(`${serverUrl}/sendOtp`,{phoneNumber : props.ph,email:props.email},{withCredentials:true})
  
  })


  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={props.onChange}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 ,me:4}}>
             <Otp onChange={handleOtp} />  
           </Typography>
        </Box>
      </Modal>
    </div>
  );
}
