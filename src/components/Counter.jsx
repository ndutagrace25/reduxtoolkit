import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counter";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementValue = () => {
    dispatch(increment());
  };
  const decrementValue = () => {
    dispatch(decrement());
  };
  const incrementByValue = (value) => {
    dispatch(incrementByAmount(value));
  };

  return (
    <div>
      <button onClick={incrementValue}>increment</button>
      {count}
      <button onClick={decrementValue}>decrement</button>
      <button onClick={() => incrementByValue(30)}>increment by 30</button>
    </div>
  );
};

export default Counter;
