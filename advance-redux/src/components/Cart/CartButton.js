import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const items = useSelector((state) => state.items);

  const quantity = items.reduce((acc, prev) => {
    return acc + prev.quantity;
  }, 0);

  console.log(quantity[2]);

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
