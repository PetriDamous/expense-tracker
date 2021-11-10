import React from "react";

import classes from "./styles/cart.module.css";
import CartContext from "../../store/cart/cart-context";

import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import CartItem from "./cart-items/CartItem";

const Cart = ({ handleHideCart }) => {
  const cartCtx = React.useContext(CartContext);

  const totalPrice = `${cartCtx.totalPrice.toFixed(2)}`;

  const isOrderVisiable = cartCtx.cartItems.length > 0;

  const onAdd = (id) => cartCtx.incrementQuantity(id);

  const onRemove = (id, amount) => {
    if (amount <= 1) {
      cartCtx.removeItem(id);
    }

    cartCtx.decrementQuantity(id);
  };

  const cartItems = (
    <ul>
      {cartCtx.cartItems.map(({ id, ...otherProps }) => (
        <li className={classes["cart-items"]}>
          <CartItem
            key={id}
            id={id}
            onAdd={onAdd}
            onRemove={onRemove}
            {...otherProps}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal handleHideCart={handleHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <Button
          classValue={classes["button--alt"]}
          button={{ onClick: handleHideCart }}
        >
          Close
        </Button>
        {isOrderVisiable && <Button classValue={classes.button}>Order</Button>}
      </div>
    </Modal>
  );
};

export default Cart;
