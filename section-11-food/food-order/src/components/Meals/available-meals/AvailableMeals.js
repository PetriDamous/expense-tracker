import React from "react";

import classes from "./styles/available-meals.module.css";
import DUMMY_MEALS from "../../../data/dummy.-meals";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <div className={classes.meals}>
      <ul>{mealsList}</ul>
    </div>
  );
};

export default AvailableMeals;
