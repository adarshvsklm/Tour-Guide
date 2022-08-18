import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { useState } from 'react';


//  import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { makeStyles } from "@mui/styles";
import { makeStyles } from "@material-ui/core/styles";




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 600,
    bgcolor: 'background.paper',
     boxShadow: 24,
    p: 4,
    borderRadius : 3
 };
 

export default function AuthModal(props) {

    const [action,setAction] = useState(props.action)

    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        props.onChange()
        setOpen(false)
        // handleCloseprop()
    };

    const handleAction=(prevAction)=>{
          prevAction =='login' ? setAction('signUp') : setAction('login')
    }

    const handleLogin = ()=>{
        props.onAuthChange()
    }



    return (
        <div  >
            
            <Card >
                <Modal   
                    open={open}
                    onClose={() => {
                        handleClose()

                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                     sx={style}
                      >
                         {action == 'login' ? <Login onAuthChange={handleLogin} onChange={handleAction} closeLogin={handleClose}/> : <SignUp onChange={handleAction} closeSignUp={handleClose} />}
                         {/* {action == 'login' ? <Login onChange={handleAction} closeLogin={handleClose}/> : <SignUp onChange={handleAction} closeSignUp={handleClose} />} */}
 
                    </Box>  
                </Modal>
            </Card>
            <Box sx={{ p: 5 }} /> 
        </div >
    );
}
