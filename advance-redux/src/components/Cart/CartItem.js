import classes from "./CartItem.module.css";

/**
 * Local state to track local quanity
 *  i. Starting state is 1
 *
 * Global quanity that works with local quanity
 *  i. function that increases local quanity as well as global quanity
 *
 *  Quanity reaches zero or below remove item from global state
 *   i. make function to trigger action and conditional to watch out for zero
 *
 *  Add remove button
 *    i. item removes subtract local quantity from global quantity
 *
 *  Track total based on quanity
 */

const CartItem = (props) => {
  const { title, quantity, total, price } = props;

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
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
