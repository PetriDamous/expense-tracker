import React from "react";

const Button = ({ children, classValue = null, button = null }) => {
  return (
    <button className={classValue} {...button}>
      {children}
    </button>
  );
};

export default Button;
