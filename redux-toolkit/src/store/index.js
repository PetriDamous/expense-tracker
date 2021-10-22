import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  isToggle: true,
};

// createSlice
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

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const { increment, decrement, incrementByAmount, toggleCounter } =
  counterSlice.actions;

export default store;
