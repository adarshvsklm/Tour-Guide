import React, { useRef, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
 
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import "swiper/swiper.min.css"
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import {makeStyles} from '@mui/styles'
 
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
          disableOnInteraction: true,
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









// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
 
// // Import Swiper styles
// import "swiper/swiper.min.css";
// // import "swiper/css/pagination";
// // import "swiper/css/navigation";

// import "./styles.css";

// // import required modules
// import { Pagination, Navigation } from "swiper";

// export default function App() {
//   return (
//     <>
//       <Swiper
//         pagination={{
//           type: "fraction",
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
