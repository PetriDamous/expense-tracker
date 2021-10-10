import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ isValidInupt }) => (!isValidInupt ? "inherit" : "red")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${({ isValidInupt }) => (!isValidInupt ? "#ccc" : "red")};
    background-color: ${({ isValidInupt }) =>
      !isValidInupt ? "transparent" : "salmon"};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidInupt, setValidInput] = useState(false);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setValidInput(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setValidInput(true);
      return;
    }

    setEnteredValue("");

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isValidInupt={isValidInupt}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
