export const findIndex = (array, obj, property) => {
  return array.findIndex((item) => item[property] === obj[property]);
};

export const findItem = (array, obj, property) =>
  array.find((arrayItem) => arrayItem[property] === obj[property]);

export const getTotal = (price, quantity) => price * quantity;
