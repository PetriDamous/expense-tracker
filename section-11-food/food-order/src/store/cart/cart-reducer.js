export const initialCartState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { cartItems, totalQuantity } = state;

      const updatedCart = [action.payload, ...cartItems];

      // const updatedTotalAmount = cartItems.reduce((init, current) => {
      //   return init + current.price;
      // }, 0);

      return {
        ...state,
        cartItems: updatedCart,
        totalQuantity: totalQuantity + action.payload.amount,
      };

    case "REMOVE_ITEM":
      const removeItemId = action.payload;

      const newCartArray = state.cartItems((item) => item.id !== removeItemId);

      return {
        ...state,
        cartItems: newCartArray,
      };

    default:
      return state;
  }
};
