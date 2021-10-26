import React from "react";

const Demo = (props) => {
  console.log("Demo_ran");

  return <p>{props.text}</p>;
};

export default React.memo(Demo);
