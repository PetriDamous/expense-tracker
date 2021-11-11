import React, { useContext } from "react";

import classes from "./styles/meal-item.module.css";

import { MealItemForm } from "../meal-item-form/MealItemForm";
import CartContext from "../../../store/cart/cart-context";

const MealItem = (props) => {
  const { addItem } = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCart = (amount) => {
    console.log(props.id);
    addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} addItem={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
