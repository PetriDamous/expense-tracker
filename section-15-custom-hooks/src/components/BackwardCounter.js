import useCounter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = () => {
  const [counterValue] = useCounter(0, "backward");

  return <Card>{counterValue}</Card>;
};

export default BackwardCounter;
