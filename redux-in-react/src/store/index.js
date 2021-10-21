import { createStore } from "redux";

export const increment = () => ({ type: "INCREMENT" });

export const decrement = () => ({ type: "DECREMENT" });

export const increase = (num) => {
  return {
    type: "INCREASE",
    payload: num,
  };
};

export const toggle = () => ({ type: "TOGGLE" });

const INITIAL_STATE = {
  count: 0,
  isToggle: true,
};

const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "INCREASE":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "TOGGLE":
      return {
        ...state,
        isToggle: !state.isToggle,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

export default store;
