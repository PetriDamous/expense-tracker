import React from "react";

import classes from "./styles/available-meals.module.css";
import DUMMY_MEALS from "../../../data/dummy.-meals";

import Card from "../../UI/Card/Card";
import MealItem from "../meal-item/MealItem";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(({ id, ...otherProps }) => (
    <MealItem key={id} id={id} {...otherProps} />
  ));

  return (
    <div className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
