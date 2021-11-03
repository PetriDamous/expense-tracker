import { createSlice } from "@reduxjs/toolkit";
import { findItem, getTotal } from "../utility/utility";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = findItem(state.cartItems, action.payload, "id");

      if (!item) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };

        newItem.total = getTotal(action.payload.price, newItem.quantity);

        state.cartItems = [newItem, ...state.cartItems];
        state.totalQuantity++;

        return;
      }

      item.quantity++;
      item.total = item.quantity * item.price;

      state.totalQuantity++;
    },
    removeItem(state, action) {
      const item = findItem(state.cartItems, action.payload, "id");

      state.totalQuantity = state.totalQuantity - item.quantity;

      const newItemsArray = state.cartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );

      state.cartItems = [...newItemsArray];
    },
    incrementQauntity(state, action) {
      const item = findItem(state.cartItems, action.payload, "id");

      item.quantity++;
      item.total = getTotal(item.price, item.quantity);

      state.totalQuantity++;
    },
    decrementQauntity(state, action) {
      const item = findItem(state.cartItems, action.payload, "id");

      item.quantity--;
      item.total = getTotal(item.price, item.quantity);

      state.totalQuantity--;
    },
  },
});

export const { addItem, removeItem, incrementQauntity, decrementQauntity } =
  cartSlice.actions;

export default cartSlice.reducer;
