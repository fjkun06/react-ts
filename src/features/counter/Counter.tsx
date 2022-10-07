import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { decrement, increment, incrementByValue } from "./counterSlice";

export const Counter = () => {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>Counter value is {count}</div>
      <br />
      <button type="button" onClick={() => dispatch(increment())}>Increment</button>
      <button type="button" onClick={() => dispatch(decrement())}>DEcrement</button>
      <br />

      <button type="button" onClick={() => dispatch(incrementByValue(12))}>IIncrement</button>
    </>
  );
};
