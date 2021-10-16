export const PASSWORD_INITIAL_STATE = {
  value: "",
  isValid: null,
};

export const passwordReducer = (state, action) => {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        value: action.payload.value,
      };
    case "CHECK_VALID":
      return {
        ...state,
        isValid: state.value.trim().length > 6,
      };
    default:
      return PASSWORD_INITIAL_STATE;
  }
};
