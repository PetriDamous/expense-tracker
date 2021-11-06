import React from "react";

import "remixicon/fonts/remixicon.css";
import classes from "./styles/cart-button.module.css";

const CartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <i class="ri-shopping-cart-line"></i>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButton;
