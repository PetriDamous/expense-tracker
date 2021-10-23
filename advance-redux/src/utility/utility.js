export const findIndex = (array, obj, property) => {
  return array.findIndex((item) => item[property] === obj[property]);
};

export const getTotal = (price, quantity) => price * quantity;
