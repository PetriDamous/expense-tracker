import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggle: true,
  notification: {
    isNotification: false,
    status: "",
    title: "",
    message: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.isToggle = !state.isToggle;
    },
    setNotification(state, action) {
      state.notification = {
        ...action.payload,
      };
    },
  },
});

export const { toggle, setNotification } = uiSlice.actions;

export default uiSlice.reducer;
