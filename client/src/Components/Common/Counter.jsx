import React from 'react';
import CounterInput from 'react-counter-input';
import { useDispatch } from 'react-redux';
import { setSearchData } from '../../Redux/User/SearchHotelSlice';

export default function Counter({ item, setData,count }) {
  const dispatch = useDispatch();
  // dispatch(setSearchData(item:))
  console.log(count);
  return (
    <CounterInput
      min={0}
      max={10}
      count={count}
      onCountChange={(count) => {
        var obj = {};
        obj[item] = count;
        setData(obj);
      }}
    />
  );
}
