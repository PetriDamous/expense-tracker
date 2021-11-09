import CartContext from "./cart-context";

import React from "react";

const CartProvider = (props) => {
  const cartContext = {
    cartItems: [],
    totalQuantity: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
