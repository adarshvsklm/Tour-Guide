import { useState, useEffect } from 'react';
import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
 import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, FormHelperText } from '@mui/material';
import axios from 'axios';
import { serverUrl } from '../../../serverUrl';
import Verification from './OtpVerificationModal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import InputAdornment from '@mui/material/InputAdornment';
 
    import { useCookies } from 'react-cookie';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function HotelSignUp(props) {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [error, setError] = useState('');

  const [otpModal, setOtpModal] = useState(false);
  const [otp, setOtp] = useState(null);
  const handleOtpModal = () => {
    setOtpModal(false);
  };

  const handleOtp = (otpNumber) => {
    otpNumber = parseInt(otpNumber);
    setOtp(otpNumber);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(name, email, phoneNumber);
    const data = { name, email, phoneNumber, password, otp };

    axios
      .post(`${serverUrl}/hotel/signup`, data)
      .then((res) => {
        // props.onChange('signup');
        navigate('/hotel/login')
      })
      .catch((err) => {
        console.log(err);
        // if (err.request.status == 409) {
        //   setError('An account with this email already exists');
        // }
      });
  };

  const handleAction = () => {
    props.onChange('signup');
  };

  // phone number validation
  let hasPhoneValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
    phoneNumber
  );

  //password validation

  let hasSixChar = password.length >= 6;
  let hasLowerChar = /(.*[a-z].*)/.test(password);
  let hasUpperChar = /(.*[A-Z].*)/.test(password);
  let hasNumber = /(.*[0-9].*)/.test(password);
  let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);
  //email validation
  const hasEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    );

 
  const [cookies, setCookies] = useCookies();
  const [_, setSignupData] = useState(
    cookies.signupData ? cookies.signupData : null
  );

  

  const handleFailure = (result) => {
    console.log(result);
  };

  const sentOtp = async () => {
    try {
      const response = await axios.post(
        `${serverUrl}/sendOtp`,
        { phoneNumber, email },
        { withCredentials: true }
      );
      console.log(response);
      setOtpModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {otpModal ? (
        <Verification
          onChange={handleOtpModal}
          saveOtp={handleOtp}
          MobileNumber={phoneNumber}
          email={email}
        />
      ) : (
        ''
      )}
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Typography component='h1' variant='h5'>
              Sign Up
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <small style={{ color: 'red' }}>{error}</small>
              <TextField
                value={name}
                required
                margin='normal'
                fullWidth
                id='name'
                label='Name'
                name='name'
                autoComplete='Name'
                autoFocus
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                value={email}
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                icon={<CheckCircleIcon />}
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment  >
                //       {hasEmail ? <CheckCircleIcon color='success'/>:''}
                //     </InputAdornment>
                //   ),
                // }}
              />

              {email &&
                // <small style={hasEmail ? { color: "green" } : { color: "red" }}>
                //   {hasEmail ? <span>Email validated</span> : <span>provide correct Email address</span>}
                // </small>
                (hasEmail ? (
                  ''
                ) : (
                  <small style={{ color: 'red' }}>Enter a valid Email</small>
                ))}
              <TextField
                disabled={otp}
                value={phoneNumber}
                margin='normal'
                required
                fullWidth
                id='phoneNumber'
                label='Phone Number'
                name='phoneNumber'
                autoComplete='PhoneNumber'
                autoFocus
                onChange={(e) => setPhoneNumber(e.target.value)}
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment  >
                //       {hasPhoneValid ? <CheckCircleIcon color='success'/>:''}
                //     </InputAdornment>
                //   ),
                // }}
              />
              {phoneNumber && (
                <small
                  style={hasPhoneValid ? { color: 'green' } : { color: 'red' }}
                >
                  {hasPhoneValid ? (
                    ''
                  ) : (
                    <span>provide correct Phone Number</span>
                  )}
                </small>
              )}

              {hasPhoneValid && !otp ? (
                <Link
                  onClick={sentOtp}
                  style={{ float: 'right' }}
                  variant='body2'
                  href='#'
                > 
                  Verify Phone Number
                </Link>
              ) : (
                ''
              )}
              {otp ? (
                <small style={{ float: 'right', color: 'green' }}>
                  OTP VERIFIED
                </small>
              ) : (
                ''
              )}
              <TextField
                value={password}
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) => setPassword(e.target.value)}
              />
              {password && (
                <div className='ml-1' style={{ columns: '2' }}>
                  <div>
                    <small
                      style={hasSixChar ? { color: 'green' } : { color: 'red' }}
                    >
                      Atleast six characters
                    </small>
                  </div>

                  <div>
                    <small
                      style={
                        hasLowerChar ? { color: 'green' } : { color: 'red' }
                      }
                    >
                      One lowercase letter
                    </small>
                  </div>

                  <div>
                    <small
                      style={
                        hasUpperChar ? { color: 'green' } : { color: 'red' }
                      }
                    >
                      One uppercase letter
                    </small>
                  </div>

                  <div>
                    <small
                      style={
                        hasSpecialChar ? { color: 'green' } : { color: 'red' }
                      }
                    >
                      One special character
                    </small>
                  </div>

                  <div>
                    <small
                      style={hasNumber ? { color: 'green' } : { color: 'red' }}
                    >
                      One number
                    </small>
                  </div>
                </div>
              )}

              <TextField
                value={cpassword}
                margin='normal'
                required
                fullWidth
                name='cpassword'
                label='Confirm Password'
                type='password'
                id='cpassword'
                autoComplete='current-password'
                onChange={(e) => setCPassword(e.target.value)}
              />
              {password && cpassword && (
                <FormHelperText className='ml-1 mt-1'>
                  {password === cpassword ? (
                    <span style={{ color: 'green' }}>Password does match</span>
                  ) : (
                    <span style={{ color: 'red' }}>
                      Password does not match
                    </span>
                  )}
                </FormHelperText>
              )}

              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
                disabled={
                  !name ||
                  !email ||
                  !password ||
                  !cpassword ||
                  !(cpassword === password) ||
                  !hasSixChar ||
                  !hasLowerChar ||
                  !hasUpperChar ||
                  !hasSpecialChar ||
                  !hasNumber ||
                  !hasEmail ||
                  !hasPhoneValid ||
                  !otp
                }
              >
                Sign Up
              </Button>

              <Grid>
                <Link
                  href='#'
                  variant='body2'
                  align='center'
                  sx={{ display: 'block', mt: 1 }}
                  onClick={handleAction}
                >
                  {'Already have an account? Login'}
                </Link>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
