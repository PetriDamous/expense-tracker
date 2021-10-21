import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { increment, decrement } from "../store";

import Button from "./Button/Button";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment());

  const handleDecrement = () => dispatch(decrement());

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <Button onClick={handleIncrement}>increment +</Button>
        <Button onClick={handleDecrement}>decrement -</Button>
      </div>
      <Button onClick={toggleCounterHandler}>Toggle Counter</Button>
    </main>
  );
};

export default Counter;
