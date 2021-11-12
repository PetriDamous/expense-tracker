import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const [
    nameValue,
    isNameValid,
    isNameInvalid,
    handleNameInput,
    handleNameBlur,
    nameValueRest,
  ] = useInput((value) => value.trim() !== "");

  const [
    emailValue,
    isEmailValid,
    isEmailInvalid,
    handleEmailInput,
    handleEmailBlur,
    emailValueRest,
  ] = useInput((value) => value.trim() !== "" && value.trim().includes("@"));

  const inputValidArray = [isNameValid, isEmailValid];

  const isAllInputsValid = inputValidArray.every((value) => value === true);

  let isFormValid = false;

  if (isAllInputsValid) {
    isFormValid = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    nameValueRest();
    emailValueRest();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-control ${isNameInvalid && `invalid`}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleNameInput}
          onBlur={handleNameBlur}
          value={nameValue}
        />
      </div>

      {isNameInvalid && (
        <p className="error-text">Enter a fuckin name please....</p>
      )}

      <div className={`form-control ${isEmailInvalid && `invalid`}`}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="name"
          name="email"
          onChange={handleEmailInput}
          onBlur={handleEmailBlur}
          value={emailValue}
        />
      </div>

      {isEmailInvalid && <p className="error-text">Enter a fuckin email....</p>}

      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
