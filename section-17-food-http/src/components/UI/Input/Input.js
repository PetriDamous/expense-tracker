import React from "react";

import classes from "./styles/input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.input.id}>{props.input.label}</label>
      <input ref={ref} {...props.input} />
    </>
  );
});

export default Input;
