import React, { useRef, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
 
// Import Swiper styles
// import 'swiper/scss';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import {makeStyles} from '@mui/styles'
import { Swiper, SwiperSlide } from 'swiper/react';
 
const useStyles = makeStyles((theme) => ({
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    width: '60%',
    margin: '0 auto',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <>
      <Swiper
         cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className='mySwiper'
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            className={classes.image}
            src='https://assets.cntraveller.in/photos/60ba009d010276881eb4d9fd/master/pass/Hyderabad3-Alamy-D9K7KC-1366x768.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            src='https://assets.cntraveller.in/photos/60ba009d010276881eb4d9fd/master/pass/Hyderabad3-Alamy-D9K7KC-1366x768.jpg'
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            src='https://assets.cntraveller.in/photos/60ba009d010276881eb4d9fd/master/pass/Hyderabad3-Alamy-D9K7KC-1366x768.jpg'
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            src='https://assets.cntraveller.in/photos/60ba009d010276881eb4d9fd/master/pass/Hyderabad3-Alamy-D9K7KC-1366x768.jpg'
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            src='https://assets.cntraveller.in/photos/60ba009d010276881eb4d9fd/master/pass/Hyderabad3-Alamy-D9K7KC-1366x768.jpg'
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            src='https://assets.cntraveller.in/photos/60ba009d010276881eb4d9fd/master/pass/Hyderabad3-Alamy-D9K7KC-1366x768.jpg'
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            src='https://assets.cntraveller.in/photos/60ba009d010276881eb4d9fd/master/pass/Hyderabad3-Alamy-D9K7KC-1366x768.jpg'
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            src='https://assets.cntraveller.in/photos/60ba009d010276881eb4d9fd/master/pass/Hyderabad3-Alamy-D9K7KC-1366x768.jpg'
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={classes.image}
            src='https://assets.cntraveller.in/photos/60ba009d010276881eb4d9fd/master/pass/Hyderabad3-Alamy-D9K7KC-1366x768.jpg'
          />{' '}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
