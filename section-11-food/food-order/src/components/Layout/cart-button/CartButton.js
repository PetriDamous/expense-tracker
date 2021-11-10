import React, { useContext } from "react";

import "remixicon/fonts/remixicon.css";
import classes from "./styles/cart-button.module.css";

import CartContext from "../../../store/cart/cart-context";

const CartButton = ({ handleShowCart }) => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <button className={classes.button} onClick={handleShowCart}>
      <span className={classes.icon}>
        <i class="ri-shopping-cart-line"></i>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
