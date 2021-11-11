import React, { useContext, useState, useEffect } from "react";

import "remixicon/fonts/remixicon.css";
import classes from "./styles/cart-button.module.css";

import CartContext from "../../../store/cart/cart-context";

let isInitialLoad = true;

const CartButton = ({ handleShowCart }) => {
  const [isAnimationOn, setAnimationOn] = useState(false);

  const { cartItems, totalQuantity } = useContext(CartContext);

  useEffect(() => {
    if (isInitialLoad) {
      isInitialLoad = false;
      return;
    }

    setAnimationOn(true);

    const timeId = setTimeout(() => {
      setAnimationOn(false);
    }, 300);

    return () => clearTimeout(timeId);
  }, [cartItems]);

  const btnClasses = `${classes.button} ${isAnimationOn && classes.bump}`;

  return (
    <button className={btnClasses} onClick={handleShowCart}>
      <span className={classes.icon}>
        <i class="ri-shopping-cart-line"></i>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
