import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

/**
 * Setup global quantity
 *
 * Setup global items
 *
 * Actions:
 *  1. Add item
 *      i. check for duplicates
 *      ii. Increase quantity
 *  2. Remove item
 *      i. decrease quantity
 *  3. Increase quantity
 *  4. Decrease quantity
 */

const initialState = {
  items: [],
  totalQuantity: 0,
};

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addItem(state, action) {
      const idx = state.items.findIndex(
        (item) => item.title === action.payload.title
      );

      console.log(action.payload.price);
      if (idx === -1) {
        const newItem = {
          id: uuidv4(),
          title: action.payload.title,
          quantity: 1,
          price: action.payload.price,
        };

        newItem.total = action.payload.price * newItem.quantity;

        state.items = [newItem, ...state.items];
        return;
      }

      state.items[idx].quantity++;
      state.items[idx].total =
        state.items[idx].quantity * state.items[idx].price;
    },
    incrementQauntity(state) {
      state.totalQuantity++;
    },
    decrementQauntity(state) {
      state.totalQuantity--;
    },
  },
});

const store = configureStore({
  reducer: shoppingSlice.reducer,
});

// store.dispatch(shoppingSlice.actions.addItem({ title: "dog", price: 99 }));
// store.dispatch(shoppingSlice.actions.addItem({ title: "dog", price: 99 }));

console.log(store.getState());

export const { addItem } = shoppingSlice.actions;

export default store;
