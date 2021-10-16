export const EMAIL_INITIAL_STATE = {
  value: "",
  isValid: null,
};

export const emailReducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        value: action.payload.value,
      };
    case "CHECK_VALID":
      return {
        ...state,
        isValid: state.value.includes("@"),
      };
    default:
      return EMAIL_INITIAL_STATE;
  }
};
