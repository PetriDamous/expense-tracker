import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { initialCartState, cartReducer } from "./cart-reducer";

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const cartContext = {
    ...cartState,
    addItem: (item) => {
      cartDispatch({ type: "ADD_ITEM", payload: item });
    },
    removeItem: (id) => {
      cartDispatch({ type: "REMOVE_ITEM", payload: id });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
