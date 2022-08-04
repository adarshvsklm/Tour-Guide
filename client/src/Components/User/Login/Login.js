import * as React from 'react';
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

export default function Login(props) {



  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)


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
    const data = { email, password }
    axios.post(`${serverUrl}/login`, data).then((res) => {
       if (res.data.user) {

        localStorage.setItem('Usertoken', res.data.user)
        // toast("Login  Success ! ",{autoClose:800})
        // console.log(data);
        setError(null)
        props.closeLogin()
        // navigate('/')
        // window.location.href='/dashboard'

      } else {
        setError("email or password is incorrect")
        // alert('PLease check your username and password')
      }
    }).catch((err) => {
      console.log(err);
    })
  };



  const handleAction = () => {
    props.onChange('login')
  }

  return (
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
            Sign in
          </Typography>
          <small>{error}</small>
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
            <Grid >
              <Link href="#" variant="body2" align="center" sx={{ display: "block", mt: 1 }} onClick={handleAction} >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}