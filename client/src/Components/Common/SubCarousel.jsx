import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css"
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper';
import {makeStyles} from '@mui/styles'
// import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    margin: '0 auto',
  },
  caption : {
    display: 'flex',
    justifyContent: 'center',
    width:"90%",
    margin :"0 auto",
    alignItems:"center",
    zIndex:'1000'
  }
}));

export default function SubCarousel() {
  const [swiperRef, setSwiperRef] = useState(null);

  const classes = useStyles();

  return (
    <>
      <Swiper
      // style={{ zIndex: -1 }}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={0}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
        autoplay={{
          delay: 200,
          disableOnInteraction: true,
        }}
      >
         
        <SwiperSlide>
           <span className={classes.caption}>Slider</span>
          <img
            className={classes.image}
            src='https://static9.depositphotos.com/1008005/1199/i/600/depositphotos_11991262-stock-photo-bangalore.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
           <span className={classes.caption}>Slider</span>
          <img
            className={classes.image}
            src='https://static9.depositphotos.com/1008005/1199/i/600/depositphotos_11991262-stock-photo-bangalore.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
           <span className={classes.caption}>Slider</span>
          <img
            className={classes.image}
            src='https://static9.depositphotos.com/1008005/1199/i/600/depositphotos_11991262-stock-photo-bangalore.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
           <span className={classes.caption}>Slider</span>
          <img
            className={classes.image}
            src='https://static9.depositphotos.com/1008005/1199/i/600/depositphotos_11991262-stock-photo-bangalore.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
           <span className={classes.caption}>Slider</span>
          <img
            className={classes.image}
            src='https://static9.depositphotos.com/1008005/1199/i/600/depositphotos_11991262-stock-photo-bangalore.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
           <span className={classes.caption}>Slider</span>
          <img
            className={classes.image}
            src='https://static9.depositphotos.com/1008005/1199/i/600/depositphotos_11991262-stock-photo-bangalore.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
           <span className={classes.caption}>Slider</span>
          <img
            className={classes.image}
            src='https://static9.depositphotos.com/1008005/1199/i/600/depositphotos_11991262-stock-photo-bangalore.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
           <span className={classes.caption}>Slider</span>
          <img
            className={classes.image}
            src='https://static9.depositphotos.com/1008005/1199/i/600/depositphotos_11991262-stock-photo-bangalore.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
           <span className={classes.caption}>Slider</span>
          <img
            className={classes.image}
            src='https://static9.depositphotos.com/1008005/1199/i/600/depositphotos_11991262-stock-photo-bangalore.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
