import React from 'react';
import './SearchBarStyle.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { makeStyles } from '@mui/styles';
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

const theme = createTheme();
const useStyles = makeStyles(() => ({
  root: {
    minHeight: '25vh',
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
  },
}));
function HotelSearchBar() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        {/* <span className={classes.searchBar}>search bar</span> */}
        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input
              type='text'
              placeholder='Where are you going ?'
              className='headerSearchInput'
            />
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
             <span className='headerSearchText'>date to date</span>
          </div>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span className='headerSearchText'>2 adults 2 children 1 room</span>

          </div>
        </div>
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
