import { createSlice } from "@reduxjs/toolkit";
import { findItem, getTotal } from "../utility/utility";
import { setNotification } from "./ui-slice";

// Custom action creators
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      setNotification({
        isNotification: true,
        status: "pending",
        title: "Sending",
        message: "Sending request.",
      })
    );

    const sendData = async () => {
      const response = await fetch(process.env.REACT_APP_HTTP, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Shit got fucked up!");
      }

      dispatch(
        setNotification({
          isNotification: true,
          status: "success",
          title: "Sent",
          message: "Request sent",
        })
      );
    };

    sendData().catch((e) => {
      dispatch(
        setNotification({
          isNotification: true,
          status: "error",
          title: "Error",
          message: e.message,
        })
      );
    });
  };
};

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
