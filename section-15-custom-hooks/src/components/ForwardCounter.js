import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  const [countValue] = useCounter(0);

  return <Card>{countValue}</Card>;
};

export default ForwardCounter;
