import React, { useEffect, useState } from "react";

import classes from "./styles/available-meals.module.css";
import DUMMY_MEALS from "../../../data/dummy.-meals";

import Card from "../../UI/Card/Card";
import MealItem from "../meal-item/MealItem";

const AvailableMeals = () => {
  const [mealsArray, setMealsArray] = useState([]);
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getMealsData = async () => {
      const res = await fetch(process.env.REACT_APP_MEALS);

      if (!res.ok) {
        throw new Error("Shit got fucked up.");
      }

      const data = await res.json();

      setMealsArray(data);

      setLoading(false);
    };

    getMealsData().catch((e) => {
      setHttpError(e.message);
      setLoading(false);
    });
  }, []);

  let content = <p>Data not loaded</p>;

  if (isLoading) {
    content = <p>Loading data....</p>;
  }

  if (httpError) {
    content = <p>{httpError}</p>;
  }

  if (mealsArray.length > 0) {
    content = (
      <ul>
        {mealsArray.map(({ id, ...otherProps }) => (
          <MealItem key={id} id={id} {...otherProps} />
        ))}
      </ul>
    );
  }

  return (
    <div className={classes.meals}>
      <Card>{content}</Card>
    </div>
  );
};

export default AvailableMeals;
