import React from "react";

import classes from "./styles/header.module.css";
import headerImage from "../../../assets/meals.jpg";

import CartButton from "../cart-button/CartButton";

const Header = ({ handleShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Junk Meals</h1>
        <CartButton handleShowCart={handleShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="A table full of food." />
      </div>
    </>
  );
};

export default Header;
