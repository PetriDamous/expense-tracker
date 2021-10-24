import { v4 as uuidv4 } from "uuid";

const productsData = [
  {
    id: uuidv4(),
    title: "dog food",
    price: 10.79,
    description: "This is really good food",
  },
  {
    id: uuidv4(),
    title: "cat food",
    price: 2.58,
    description: "This is really bad food",
  },
  {
    id: uuidv4(),
    title: "air force 1s",
    price: 107.12,
    description: "You cannot eat this crap",
  },
];

export default productsData;
