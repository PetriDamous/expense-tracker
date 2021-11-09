import React from "react";

// We are using the object passed to .creatContext()
// for auto completion.
const CartContext = React.createContext({
  cartItems: [],
  totalQuantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
