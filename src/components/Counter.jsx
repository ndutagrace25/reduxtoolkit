import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  getPosts,
} from "../redux/counter";

const Counter = () => {
  const { count, todo } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

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
      <div>
          <h1>{todo.title}</h1>
      </div>
    </div>
  );
};

export default Counter;
