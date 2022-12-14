import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AuthModal from '../AuthModal/AuthModal';
import axios from 'axios';
import { serverUrl } from '../../../serverUrl';
import { AppBar, Avatar, Box, Container, Drawer, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import {makeStyles} from '@mui/styles'


const pages = ['Products', 'Pricing', 'Blog'];



const useStyles = makeStyles((theme) => ({
  appbarTitle: {
    flexGrow: '1',
  },
  appbarWrapper:{
    width : '80%',
    margin :'0 auto'
  },
  appbar : {
    fontFamily : 'Nunito' ,
    position:"fixed",
     zIndex :0,
    // height :"100px"
  },
  colorText :{
    color : '#5AFF3D',
  }
}));
const Navbar = (props) => {

  const classes = useStyles();


  
  const [isLogin, setIsLogin] = React.useState('');
  let token = localStorage.getItem('User');

  const handleLogin = () => {
    console.log(8374344, 'handle login');
    if (token) {
      axios
        .get(`${serverUrl}/logout`, { withCredentials: true })
        .then(() => {
          localStorage.removeItem('User');
          setAnchorElNav(null);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log(87654323456789);
      let token = localStorage.getItem('User');
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
      const response = await axios.get(`${serverUrl}/test`, {
        withCredentials: true,
      });
      // console.log(response);
    } catch (err) {
      if (err.response.status == 400) {
        try {
          const response2 = await axios.get(`${serverUrl}/token`, {
            withCredentials: true,
          });
          console.log(response2, 873843748734);
          const response = await axios.get(`${serverUrl}/test`, {
            withCredentials: true,
          });

          alert('posts');
        } catch (err2) {
           console.log(err2);
          token = null;
          localStorage.removeItem('User');
          setAnchorElNav(null);
        }
      }
      console.log(err, 5654);
    }
  };

  let bgColor 
  props.bgColor ? bgColor =props.bgColor :bgColor='none'

  return (
    <>
    <div style={{height:'0px' ,width:'100%'}}>
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
    </div>
      <AppBar
       sx={{mb:2}}
       className={classes.appbar}
        position='sticky'
        style={{ background:bgColor, position: 'fixed' ,height:props.height }}
        elevation={0}
      >
        <Container
        
         maxWidth='xl'>
          <Toolbar
          style={{zIndex: 10}}
           disableGutters className={classes.appbarWrapper}>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              className={classes.appbarTitle}
              variant='h6'
              noWrap
              component='a'
              href='/'
              // style={{
              //   backgroundColor : 'rgba(0, 0, 0, 0.27)'
              // }}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                // fontFamily: 'monospace',
                fontWeight: 700,
                // letterSpacing: '.3rem',
                color: 'inherit', 
                
                // textDecoration: 'none',
              }}
            >
              <span sx={{boxShadow: 4}}>My</span>
              <span sx={{boxShadow: 4}} className={classes.colorText}>Space</span>
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
                {/* <Drawer
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
                </Drawer> */}

                {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))} */}

                <MenuItem key='Trips' onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>Trips</Typography>
                </MenuItem>
              </Menu>
            </Box>
            {/* <AdbIcon style={{margin :'0 auto'}} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 ,align:'center'}} /> */}
            <Typography
              variant='h7'
              noWrap
              component='a'
              href=''
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                // fontFamily: 'monospace',
                fontWeight: 700,
                 color: 'inherit',
               }}
            >
             <span>My</span>
              <span className={classes.colorText}>Space</span>
            </Typography>
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'inherit', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box> */}

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
                      key='login'
                      onClick={() => {
                        setOpenModal(true);
                        handleCloseUserMenu();
                      }}
                    >
                      <Typography textAlign='center'>Login</Typography>
                    </MenuItem>
                    <MenuItem
                      key='signUp'
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
                    key='logout'
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
      
    </>
  );
};
export default Navbar;
