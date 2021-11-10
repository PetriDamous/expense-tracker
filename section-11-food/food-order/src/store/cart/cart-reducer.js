export const initialCartState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { cartItems, totalQuantity } = state;

      const updatedCart = [action.payload, ...cartItems];

      const updatedTotalPrice = updatedCart.reduce((init, current) => {
        return init + current.price * current.amount;
      }, 0);

      return {
        ...state,
        cartItems: updatedCart,
        totalQuantity: totalQuantity + action.payload.amount,
        totalPrice: updatedTotalPrice,
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
