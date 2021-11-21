import React from "react";
import useInput from "../../hooks/use-input";

import classes from "./styles/checkout.module.css";

import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const checkEmptyInput = (value) => value.trim() !== "";

const checkZipInput = (value) => {
  if (!checkEmptyInput(value) || value.length < 5 || isNaN(value)) return false;

  return true;
};

const Checkout = ({ handleHideCheckout }) => {
  const [
    nameValue,
    isNameValid,
    nameHasError,
    handleNameInput,
    handleNameBlur,
    nameInputRest,
  ] = useInput(checkEmptyInput);

  const [
    streetValue,
    isStreetValid,
    streetHasError,
    handleStreetInput,
    handleStreetBlur,
    streetInputRest,
  ] = useInput(checkEmptyInput);

  const [
    zipValue,
    isZipValid,
    zipHasError,
    handleZipInput,
    handleZipBlur,
    zipInputRest,
  ] = useInput(checkZipInput);

  const [
    cityValue,
    isCityValid,
    cityHasError,
    handleCityInput,
    handleCityBlur,
    cityInputRest,
  ] = useInput(checkEmptyInput);

  const inputValidCheckArray = [
    isNameValid,
    isStreetValid,
    isZipValid,
    isCityValid,
  ];

  const inputSettingsArray = [
    {
      inputSettings: {
        id: "name",
        label: "Name",
        type: "text",
        onChange: handleNameInput,
        onBlur: handleNameBlur,
        value: nameValue,
      },
      inputError: `${nameHasError && classes.invalid}`,
    },
    {
      inputSettings: {
        id: "street",
        label: "Street",
        type: "text",
        onChange: handleStreetInput,
        onBlur: handleStreetBlur,
        value: streetValue,
      },
      inputError: `${streetHasError && classes.invalid}`,
    },
    {
      inputSettings: {
        id: "zip",
        label: "Zip",
        type: "text",
        onChange: handleZipInput,
        onBlur: handleZipBlur,
        value: zipValue,
      },
      inputError: `${zipHasError && classes.invalid}`,
    },
    {
      inputSettings: {
        id: "city",
        label: "City",
        type: "text",
        onChange: handleCityInput,
        onBlur: handleCityBlur,
        value: cityValue,
      },
      inputError: `${cityHasError && classes.invalid}`,
    },
  ];

  const isFormValid = inputValidCheckArray.every((value) => value === true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    nameInputRest();
    streetInputRest();
    zipInputRest();
    cityInputRest();
  };

  return (
    <Modal>
      <form className={classes.form} onSubmit={handleSubmit}>
        {inputSettingsArray.map(({ inputSettings, inputError }) => (
          <div className={`${classes.control} ${inputError}`}>
            <Input
              input={{
                ...inputSettings,
              }}
            />
          </div>
        ))}

        <div className={classes.actions}>
          <Button button={{ onClick: handleHideCheckout }}>Cancel</Button>
          <Button classValue={classes.submit}>Submit</Button>
        </div>
      </form>
    </Modal>
  );
};

export default Checkout;
