import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { createTheme } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@mui/styles';
import './SearchBarStyle.css';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { setSearchData } from '../../../Redux/User/SearchHotelSlice';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: {
    minHeight: '30vh',
    [theme.breakpoints.up('md')]: {
      minHeight: '30vh',
    },
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#265299',
    alignItems: 'center',
    background: 'black',
    position: 'sticky',
    top: 0,
  },
  searchBar: {
    color: '#5AFF3D',
    display:'flex',
    justifyContent: 'center',
    width:'80%',
    margin:'0 auto',
    alignItems: 'center',
  },
  datepicker :{
    color: '#5AFF3D',
  }
}));
function HotelSearchBar() {
  const [value, setValue] = React.useState(new Date() )
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const dispatch=useDispatch()


  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    dispatch(setSearchData({popOver:event.currentTarget}))
  };

  const classes = useStyles();
  const color = "white";
  return (
    <div>
      <div className={classes.root}>
      <Button aria-describedby={'123'} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
        <LocalizationProvider dateAdapter={AdapterDateFns} >
          <Stack spacing={3} >
            <div className={classes.searchBar}>
            <DesktopDatePicker
             className={[classes.datepicker,'datepickers']}
              label='Check In'
              inputFormat='MM/dd/yyyy'
              value={value}
              InputProps={{
                disableUnderline: true
              }}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} 
              sx={{
                svg: { color },
                input: { color },
                label: { color },
                border:{color}
              }}
               />}
            />
            <DesktopDatePicker
              label='Check Out'
              inputFormat='MM/dd/yyyy'
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params}
              sx={{
                svg: { color },
                input: { color },
                label: { color },
                border:{color}
              }}
               />}
            />
            <TextField  onClick={handleClick} label='Guests' value='1 room,2 adults,0 children'  sx={{
                svg: { color },
                input: { color },
                label: { color },
                border:{color}
              }}>
              dkjdhf
            </TextField>
            </div>
          </Stack>
        </LocalizationProvider>
      </div>
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
      jhdgjhgvj <br />
    </div>
  );
}

export default HotelSearchBar;

// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// function HotelSearchBar() {
//   const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Stack spacing={3}>
//         <DesktopDatePicker
//           label='Date desktop'
//           inputFormat='MM/dd/yyyy'
//           value={value}
//           onChange={handleChange}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </Stack>
//     </LocalizationProvider>
//   );
// }
