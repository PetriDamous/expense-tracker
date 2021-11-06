import React from "react";

import MealsSummary from "../meals-summary/MealsSummary";
import AvailableMeals from "../available-meals/AvailableMeals";

const Meals = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
