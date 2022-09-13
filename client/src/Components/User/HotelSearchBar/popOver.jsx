import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchData } from '../../../Redux/User/SearchHotelSlice';
import Counter from '../../Common/Counter';

export default function PopOver() {
  const dispatch = useDispatch();
  const { popOver } = useSelector((state) => state.searchData);
  const [anchorEl, setAnchorEl] = React.useState(null);

  //   const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  const handleClose = () => {
    dispatch(setSearchData({ popOver: null }));
  };

  const open = Boolean(popOver);
  //   const id = open ? 'simple-popover' : undefined;

  const [data,setData] = React.useState({})
  const searchData= useSelector((state) => state.searchData)
  const handleData=(dataCounts)=>{
    setData({...data,...dataCounts})
  }
  
  const handleSubmit =()=>{
    console.log({...searchData,...data });
    dispatch(setSearchData({...searchData,...data,popOver:null }));

  }

  return (
    <div >
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button> */}
      <Popover
        open={open}
        anchorEl={popOver}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div >
        <table>
          <tr>
            <td>
              <Typography sx={{ p: 2 }}>Rooms</Typography>
            </td>
            <td>
              <Counter item='rooms' setData={handleData} count={searchData.rooms}/>
            </td>
          </tr>
          <tr>
            <td>
              <Typography sx={{ p: 2 }}>Adults</Typography>
            </td>
            <td>
              <Counter item='adults' setData={handleData} count={searchData.adults} />
            </td>
          </tr>
          <tr>
            <td>
              <Typography sx={{ p: 2 }}>Children</Typography>
            </td>
            <td>
              <Counter item='children' setData={handleData} count={searchData.children} />
            </td>
          </tr>
        </table>
         <Button onClick={handleSubmit}  style={{width: '100%', alignItems: 'center'}} className='mx-auto'> Update</Button>
        </div>
      </Popover>
    </div>
  );
}
