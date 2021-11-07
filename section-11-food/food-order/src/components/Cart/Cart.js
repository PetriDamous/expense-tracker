import React from "react";

import classes from "./styles/cart.module.css";

import Button from "../UI/Button/Button";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ name: "dick" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.99</span>
      </div>
      <div>
        <Button classValue={classes["button--alt"]} button={null}>
          Close
        </Button>
        <Button classValue={classes.button}>Order</Button>
      </div>
    </div>
  );
};

export default Cart;
