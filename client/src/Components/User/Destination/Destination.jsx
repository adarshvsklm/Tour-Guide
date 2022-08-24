// import { makeStyles } from '@material-ui/core';
import {makeStyles} from '@mui/styles'
import React from 'react';
import MainCarousel from '../../Common/MainCarousel';
import Paragraph from '../../Common/Paragraph';
import SubCarousel from '../../Common/SubCarousel';
import Text from '../../Common/Text';
import About from './About';
 const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Nunito',
  },
  colorText: {
    color: '#1ec700',
  },
  about: {
    marginTop: '5%',
    marginLeft: '5%',
    display: 'flex',
  },
  carousel: {
    // position : 'fixed',
    zIndex: '-1',
  },
  subCarousel: {
    marginTop: '20px',
  },
  attractions: {
    margin: '5%',
  },
}));
function Destination() {
  const classes = useStyles();
  let destination = 'Hyderabad';
  let description =
    'Want a taste of being royal? Eat in Hyderabad, where culinary traditions have been passed down from the Nizam monarchy. Arabic, Turkish and Mughlai influences are easily recognisable. The city is famous for its rich, aromatic biryani made with lamb, chicken or vegetables and served with fragrant basmati rice. Satisfy your sweet tooth with double-ka-meetha, a bread pudding.';

  return (
    <>
      <div className={classes.root}>
        <h1 className={classes.colorText}>Explore</h1>
        <h1>Hyderabad</h1>
      </div>
      <MainCarousel className={classes.carousel} />
      {/* <About heading={heading} description ={description} size="500px" /> */}
      <div className={classes.about}>
        <Text text='About' />
        <Text text={destination} color='black' />
      </div>
      <Paragraph text={description} />

      <div className={classes.attractions}>
        <div style={{ display: 'flex' }}>
          <Text text='To Do In    ' />
          <Text text={destination} color='black' />
        </div>
        <div className={classes.subCarousel}>
          <SubCarousel />
        </div>
      </div>

      <div className={classes.attractions}>
        <div style={{ display: 'flex' }}>
          <Text text='Hotels In    ' />
          <Text text={destination} color='black' />
        </div>
        <div className={classes.subCarousel}>
          <SubCarousel />
        </div>
      </div>

      <div className={classes.attractions}>
        <div style={{ display: 'flex' }}>
          <Text text='Restaurants In' />
          <Text text={destination} color='black' />
        </div>
        <div className={classes.subCarousel}>
          <SubCarousel />
        </div>
      </div>
    </>
  );
}

export default Destination;
