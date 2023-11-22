import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { increment, decrement } from '../redux/counter/counter.slice';

const useCounter = () => {

  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value)
  const onIncrement = () => dispatch(increment());
  const onDecrement = () => dispatch(decrement());

  return {
    counter,
    onIncrement,
    onDecrement,
  }
}

export default useCounter;