import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggle: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.isToggle = !state.isToggle;
    },
  },
});

export const { toggle } = uiSlice.actions;

export default uiSlice.reducer;
