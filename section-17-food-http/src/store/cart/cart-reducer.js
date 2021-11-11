import {
  getNewCartPrice,
  getItemAmount,
  getNewTotalQuantity,
} from "./utilis/cart-utilis";

export const initialCartState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartReducer = (state, action) => {
  const { cartItems } = state;

  switch (action.type) {
    case "ADD_ITEM": {
      const item = cartItems.find((item) => item.id === action.payload.id);

      let updatedCart = [];

      if (item) {
        updatedCart = getItemAmount(cartItems, {
          operation: "increase",
          compare: item.id,
          amount: action.payload.amount,
        });
      }

      if (!item) {
        updatedCart = [action.payload, ...cartItems];
      }

      const updatedTotalPrice = getNewCartPrice(updatedCart);

      const updatedTotalQuantity = getNewTotalQuantity(updatedCart);

      return {
        ...state,
        cartItems: updatedCart,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    }

    case "REMOVE_ITEM": {
      const removeItemId = action.payload;

      const newCartArray = cartItems.filter((item) => item.id !== removeItemId);

      return {
        ...state,
        cartItems: newCartArray,
      };
    }

    case "INCREMENT_ITEM": {
      const item = cartItems.find((item) => item.id === action.payload);

      const updatedCart = getItemAmount(cartItems, {
        operation: "increase",
        compare: item.id,
        amount: 1,
      });

      const updatedTotalPrice = getNewCartPrice(updatedCart);

      const updatedTotalQuantity = getNewTotalQuantity(updatedCart);

      return {
        ...state,
        cartItems: updatedCart,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    }

    case "DECREMENT_ITEM": {
      console.log(action.payload);
      const updatedCart = getItemAmount(cartItems, {
        operation: "decrease",
        compare: action.payload,
        amount: 1,
      });

      const updatedTotalPrice = getNewCartPrice(updatedCart);

      const updatedTotalQuantity = getNewTotalQuantity(updatedCart);

      return {
        ...state,
        cartItems: updatedCart,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    }

    default:
      return state;
  }
};
