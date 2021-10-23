import { useDispatch } from "react-redux";
import { incrementQauntity, decrementQauntity, removeItem } from "../../store";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, quantity, total, price } = props;

  const handleIncrement = () => {
    dispatch(incrementQauntity({ id }));
  };

  const handleDecrement = () => {
    if (quantity <= 1) {
      dispatch(removeItem({ id }));
      return;
    }

    dispatch(decrementQauntity({ id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
