import React from "react";

import classes from "./styles/meal-item-form.module.css";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

export const MealItemForm = (props) => {
  return (
    <>
      <form className={classes.form}>
        <Input
          input={{
            id: `amount-${props.id}`,
            type: "number",
            min: "0",
            max: "5",
            defaultValue: "0",
            step: "1",
          }}
        />
        <Button>+ Add</Button>
      </form>
    </>
  );
};
