import React from "react";

import classes from "./styles/cart.module.css";
import CartContext from "../../store/cart/cart-context";

import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import CartItem from "./cart-items/CartItem";

const Cart = ({ handleHideCart }) => {
  const cartCtx = React.useContext(CartContext);

  const cartItems = (
    <ul>
      {cartCtx.cartItems.map(({ id, ...otherProps }) => (
        <li className={classes["cart-items"]}>
          <CartItem key={id} id={id} {...otherProps} />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal handleHideCart={handleHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.99</span>
      </div>
      <div className={classes.actions}>
        <Button
          classValue={classes["button--alt"]}
          button={{ onClick: handleHideCart }}
        >
          Close
        </Button>
        <Button classValue={classes.button}>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;
