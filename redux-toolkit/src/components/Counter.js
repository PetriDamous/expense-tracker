import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import {
  increment,
  decrement,
  incrementByAmount,
  toggleCounter,
} from "../store";

import Button from "./Button/Button";

const Counter = () => {
  const { count, isToggle } = useSelector((state) => state);

  const dispatch = useDispatch();

  const increaseNum = 10;

  const handleIncrement = () => dispatch(increment());

  const handleDecrement = () => dispatch(decrement());

  const handleIncrease = () => dispatch(incrementByAmount(increaseNum));

  const handleToggle = () => {
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isToggle && <div className={classes.value}>{count}</div>}

      <div>
        <Button onClick={handleIncrement}>increment +</Button>
        <Button onClick={handleDecrement}>decrement -</Button>
        <Button onClick={handleIncrease}>increase {`${increaseNum}`}</Button>
      </div>
      <Button onClick={handleToggle}>Toggle Counter</Button>
    </main>
  );
};

export default Counter;
