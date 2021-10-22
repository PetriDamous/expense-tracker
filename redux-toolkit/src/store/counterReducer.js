import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  isToggle: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
    toggleCounter(state) {
      state.isToggle = !state.isToggle;
    },
  },
});

export const { increment, decrement, incrementByAmount, toggleCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
