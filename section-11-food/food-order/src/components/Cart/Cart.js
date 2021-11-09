import React from "react";

import classes from "./styles/cart.module.css";

import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";

const Cart = ({ handleHideCart }) => {
  const cartItems = (
    <ul>
      {[{ name: "dick" }].map((item) => (
        <li className={classes["cart-items"]}>{item.name}</li>
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
