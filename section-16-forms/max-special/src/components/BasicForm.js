import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
  const [
    firstNameValue,
    isFirstNameValid,
    hasFirstError,
    handleFirstNameInput,
    handleFirstNameBlur,
    firstNameRest,
  ] = useInput2((value) => value.trim() !== "");

  const [
    lastNameValue,
    isLastNameValid,
    hasLastError,
    handleLastNameInput,
    handleLastNameBlur,
    lastNameRest,
  ] = useInput2((value) => value.trim() !== "");

  const [
    emailNameValue,
    isEmailNameValid,
    hasEmailError,
    handleEmailNameInput,
    handleEmailNameBlur,
    emailNameRest,
  ] = useInput2((value) => value.trim() !== "" && value.includes("@"));

  const inputValidArray = [isFirstNameValid, isLastNameValid, isEmailNameValid];

  const isFormValid = inputValidArray.every((value) => value === true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    firstNameRest();
    lastNameRest();
    emailNameRest();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className={`form-control ${hasFirstError && "invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={handleFirstNameInput}
            onBlur={handleFirstNameBlur}
            value={firstNameValue}
          />
          {hasFirstError && (
            <p className="error-text">Please enter a fuckin First Name...</p>
          )}
        </div>

        <div className={`form-control ${hasLastError && "invalid"}`}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={handleLastNameInput}
            onBlur={handleLastNameBlur}
            value={lastNameValue}
          />
          {hasLastError && (
            <p className="error-text">Please enter a fuckin Last Name...</p>
          )}
        </div>
      </div>

      <div className={`form-control ${hasEmailError && "invalid"}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={handleEmailNameInput}
          onBlur={handleEmailNameBlur}
          value={emailNameValue}
        />
        {hasEmailError && (
          <p className="error-text">Please enter a damn email...</p>
        )}
      </div>

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
