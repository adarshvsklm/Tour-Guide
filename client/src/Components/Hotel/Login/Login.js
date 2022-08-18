import  React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios'
 import {useNavigate} from 'react-router-dom'
import { serverUrl } from '../../../serverUrl';
 
 function Copyright(props) {
  return (
     <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function AdminLogin() {



  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const navigate= useNavigate()


  async function handleLogin(event) {
    event.preventDefault()

    // const response = await fetch('http://localhost:9000/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email,
    //     password
    //   })
    // })
    const data = { email, password ,admin:true}

    axios.post(`${serverUrl}/hotel/login`, data,{withCredentials:true}).then((res) => {
      console.log(res.request.status);
       if (res.request.status == 200) {
 
        localStorage.setItem('Hotel', res.data.admin)
        // toast("Login  Success ! ",{autoClose:800})
        // console.log(data);
        setError(null)
        // props.closeLogin()
        // navigate('/')
        // window.location.href='/dashboard'

        navigate('/hotel')
      } else if(res.request.status == 401) {
        setError("email or password is incorrect")
        // alert('PLease check your username and password')
      }
    }).catch((err) => {
      console.log('489384938498398343');
      if(err.request.status){
        setError("email or password is incorrect")
      }
      console.log(err);
    })
  };



  const handleAction = () => {
    // props.onChange('login')
  }

 
//   useEffect(()=>{
//     const Admin = localStorage.getItem('Admin')
//     if(Admin){
//         navigate('/admin')
//     }
//   })

  return (
   <>
     <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Hotel Sign in
          </Typography>
          <small style={{color:"red"}}>{error}</small>
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              onClick={handleLogin}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            <Grid >
              <Link href="#" variant="body2" align="center" sx={{ display: "block", mt: 1 }}>
                Forgot password?
              </Link>
            </Grid>
             

          </Box>
        </Box>
      </Container>
    </ThemeProvider></>
  );
}
 