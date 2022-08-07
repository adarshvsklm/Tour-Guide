import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Drawer } from '@mui/material';

import AuthModal from '../AuthModal/AuthModal';
import axios from 'axios';
import { serverUrl } from '../../../serverUrl';

const pages = ['Products', 'Pricing', 'Blog'];

const Navbar = () => {
  const [isLogin, setIsLogin] = React.useState('');
  let token = localStorage.getItem('Usertoken');

  const handleLogin = () => {
    if (token) {
      localStorage.removeItem('Usertoken');
      setAnchorElNav(null);
    } else {
      console.log(87654323456789);
      let token = localStorage.getItem('Usertoken');
      setAnchorElNav(null);
    }
  };

  const [openModal, setOpenModal] = React.useState(false);

  const [openSignUp, setOpenSignUp] = React.useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClose = () => {
    setOpenModal(false);
    setOpenSignUp(false);
  };

  const test = async () => {
    // axios.defaults.withCredentials = true;
    try {
      // console.log('kkkkkkkkkkk');
      const response = await axios.get('http://localhost:9000/test', {
        withCredentials: true,
      });
      // console.log(response);
    } catch (err) {
      if (err.response.status == 400) {
        try {
          const response2 = await axios.get(`${serverUrl}/token`, {
            withCredentials: true,
          });
          console.log(response2,873843748734);
          const response = await axios.get('http://localhost:9000/test', {
        withCredentials: true,
      });
        } catch (err2) {
          console.log( 843748743);
          console.log(err2);
          token=null
          localStorage.removeItem('Usertoken');
          setAnchorElNav(null);        }
      }
      console.log(err, 5654);
    }
    // console.log(response);
    //     .then((res) => {
    //     console.log(res);
    //     alert('dhkjhksjhksjd')
    //     if(res.response.status){
    //       console.log(48723989323);
    //     }

    //  })
    // .catch((err)=>{
    //   console.log('catchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh');
    //   console.log(err);
    // })
  };

  return (
    <>
      <AppBar position='static' style={{ backgroundColor: '#693585' }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              {/* button */}
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                // onClick={handleOpenNavMenu}
                onClick={() => {
                  test();
                }}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* pages */}
                <Drawer
                  anchor='top'
                  open={isDrawerOpen}
                  onClose={() => {
                    setIsDrawerOpen(false);
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'>{page}</Typography>
                    </MenuItem>
                  ))}
                </Drawer>

                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant='h5'
              noWrap
              component='a'
              href=''
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
                <MenuItem
                  key='Profile'
                  onClick={() => {
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign='center'>Profile</Typography>
                </MenuItem>
                {/* {!token ? <MenuItem key="Profile" onClick={() => {
                  setOpenModal(true)
                  handleCloseUserMenu()
                }}>
                  <Typography textAlign="center" >Login</Typography>
                </MenuItem> :''
                } */}

                {!token ? (
                  <div>
                    <MenuItem
                      key='Profile'
                      onClick={() => {
                        setOpenModal(true);
                        handleCloseUserMenu();
                      }}
                    >
                      <Typography textAlign='center'>Login</Typography>
                    </MenuItem>
                    <MenuItem
                      key='Profile'
                      onClick={() => {
                        setOpenSignUp(true);
                        handleCloseUserMenu();
                      }}
                    >
                      <Typography textAlign='center'>SignUp</Typography>
                    </MenuItem>
                  </div>
                ) : (
                  <MenuItem
                    key='Profile'
                    onClick={() => {
                      handleLogin();
                      handleCloseUserMenu();
                    }}
                  >
                    <Typography textAlign='center'>Logout</Typography>
                  </MenuItem>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {openModal ? (
        <AuthModal
          onChange={handleClose}
          action='login'
          onAuthChange={handleLogin}
        />
      ) : (
        ''
      )}
      {openSignUp ? <AuthModal onChange={handleClose} action='signup' /> : ''}
    </>
  );
};
export default Navbar;
