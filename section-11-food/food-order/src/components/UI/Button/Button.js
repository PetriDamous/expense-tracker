import React from "react";

const Button = ({ children, classValue, button }) => {
  return (
    <button className={classValue} {...button}>
      {children}
    </button>
  );
};

export default Button;
