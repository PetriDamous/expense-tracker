import { useState } from "react";

const SimpleInput = (props) => {
  const [nameValue, setName] = useState("");
  const [emailValue, setEmail] = useState("");
  const [isNameTouched, setNameTouched] = useState(false);
  const [isEmailTouched, setEmailTouched] = useState(false);

  const isNameValid = nameValue.trim() !== "";
  const isNameInvalid = !isNameValid && isNameTouched; // false && true

  console.log("name", !isNameValid, isNameTouched);

  const isEmailValid =
    emailValue.trim() !== "" && emailValue.trim().includes("@");
  const isEmailInvalid = !isEmailValid && isEmailTouched;

  console.log("email", !isEmailValid, isEmailTouched);

  const inputValidArray = [isNameValid, isEmailValid];

  const isAllInputsValid = inputValidArray.every((value) => value === true);

  console.log("all inputs", isAllInputsValid);

  let isFormValid = false;

  if (isAllInputsValid) {
    isFormValid = true;
  }

  const handleInput = (e) => {
    const { value, name } = e.target;

    if (name === "name") {
      setName(value);
      setNameTouched(true);
    }

    if (name === "email") {
      setEmail(value);
      setEmailTouched(true);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;

    if (name === "name") {
      setNameTouched(true);
    }

    if (name === "email") {
      setEmailTouched(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // setNameTouched(true);

    if (nameValue.trim() === "" || emailValue.trim() === "") {
      return;
    }

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-control ${isNameInvalid && `invalid`}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleInput}
          onBlur={handleBlur}
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
          onChange={handleInput}
          onBlur={handleBlur}
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
