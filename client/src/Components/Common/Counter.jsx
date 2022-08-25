import React from 'react';
import CounterInput from 'react-counter-input';
import { useDispatch } from 'react-redux';
import { setSearchData } from '../../Redux/User/SearchHotelSlice';

export default function Counter({item}) {
  const dispatch = useDispatch()
  // dispatch(setSearchData(item:))
  return (
    <CounterInput
      min={0}
      max={10}
      onCountChange={(count) => dispatch(setSearchData({rooms:count}))}
    />
  );
}
