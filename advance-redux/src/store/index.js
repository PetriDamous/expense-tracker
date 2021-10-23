import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { findIndex, getTotal } from "../utility/utility";

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
};

const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    addItem(state, action) {
      const idx = findIndex(state.items, action.payload, "title");

      if (idx === -1) {
        const newItem = {
          id: uuidv4(),
          title: action.payload.title,
          quantity: 1,
          price: action.payload.price,
        };

        newItem.total = getTotal(action.payload.price, newItem.quantity);

        state.items = [newItem, ...state.items];
        return;
      }

      state.items[idx].quantity++;
      state.items[idx].total =
        state.items[idx].quantity * state.items[idx].price;
    },
    removeItem(state, action) {
      const newItemsArray = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      state.items = [...newItemsArray];
    },
    incrementQauntity(state, action) {
      const idx = findIndex(state.items, action.payload, "id");

      state.items[idx].quantity++;

      state.items[idx].total = getTotal(
        state.items[idx].price,
        state.items[idx].quantity
      );
    },
    decrementQauntity(state, action) {
      const idx = findIndex(state.items, action.payload, "id");

      state.items[idx].quantity--;

      state.items[idx].total = getTotal(
        state.items[idx].price,
        state.items[idx].quantity
      );
    },
  },
});

const store = configureStore({
  reducer: shoppingSlice.reducer,
});

// store.dispatch(shoppingSlice.actions.addItem({ title: "dog", price: 99 }));
// store.dispatch(shoppingSlice.actions.addItem({ title: "dog", price: 99 }));

console.log(store.getState());

export const { addItem, removeItem, incrementQauntity, decrementQauntity } =
  shoppingSlice.actions;

export default store;
