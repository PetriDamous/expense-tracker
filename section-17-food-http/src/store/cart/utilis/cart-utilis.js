export const getNewCartPrice = (cartArray) => {
  return cartArray.reduce((init, current) => {
    return init + current.price * current.amount;
  }, 0);
};

export const getItemAmount = (array, configObj) => {
  return array.map((arrayItem) => {
    if (arrayItem.id === configObj.compare) {
      if (configObj.operation === "increase") {
        arrayItem.amount += configObj.amount;
      }

      if (configObj.operation === "decrease") {
        arrayItem.amount -= configObj.amount;
      }
      return arrayItem;
    }

    return arrayItem;
  });
};

export const getNewTotalQuantity = (cartArray) => {
  return cartArray.reduce((init, current) => {
    return (init += current.amount);
  }, 0);
};
