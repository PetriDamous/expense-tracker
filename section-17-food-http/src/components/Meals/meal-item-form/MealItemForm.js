import React, { useRef, useState } from "react";

import classes from "./styles/meal-item-form.module.css";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

export const MealItemForm = (props) => {
  const [isAmountValid, setAmountValid] = useState(true);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const amountStr = inputRef.current.value;
    const amountNum = +amountStr;

    if (amountStr.trim().length === 0 || amountNum < 1 || amountNum > 5) {
      setAmountValid(false);
      return;
    }

    props.addItem(amountNum);
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.input}>
          <Input
            ref={inputRef}
            input={{
              id: `amount-${props.id}`,
              type: "number",
              min: "0",
              max: "5",
              defaultValue: "0",
              step: "1",
            }}
          />
        </div>

        <Button>+ Add</Button>
        {!isAmountValid && <p>Please enter correct amount.</p>}
      </form>
    </>
  );
};
