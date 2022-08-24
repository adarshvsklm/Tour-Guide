import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchData } from '../../../Redux/User/SearchHotelSlice';

export default function Popover() {

    const dispatch = useDispatch()
    const {popOver} = useSelector((state)=>state.SearchHotelSlice)
  const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

  const handleClose = () => {
    dispatch(setSearchData({popOver:null}))
  };

  const open = Boolean(popOver);
//   const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button> */}
      <Popover
        id='123'
        open={open}
        anchorEl={popOver}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
