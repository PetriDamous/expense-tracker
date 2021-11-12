import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setTouched] = useState(false);

  const isValueValid = validateValue(enteredValue);
  const hasError = !isValueValid && isTouched;

  const handleInput = (e) => {
    setEnteredValue(e.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const rest = () => {
    setTouched(false);
    setEnteredValue("");
  };

  return [enteredValue, isValueValid, hasError, handleInput, handleBlur, rest];
};

export default useInput;
