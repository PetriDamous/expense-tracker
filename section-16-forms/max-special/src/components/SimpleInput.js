import { useState } from "react";

const SimpleInput = (props) => {
  const [nameValue, setName] = useState("");
  const [emailValue, setEmail] = useState("");
  const [isTouched, setTouched] = useState(false);

  const isNameValid = nameValue.trim() !== "";
  const isNameInvalid= !isNameValid && isTouched;

  const isEmailValid = emailValue.trim() !== "" && emailValue.trim().includes("@");
  const isEmailInvalid = !isEmailValid && isTouched;

  const inputValidArray = [isNameValid];

  const isAllInputsValid = inputValidArray.every(nameValue => nameValue === true);
 
  let isFormValid = false;

  if(isAllInputsValid) {
    isFormValid = true;
  }

  const handleInput = (e) => {
    const { value } = e.target;
 
    setTouched(true);

    setName(value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched(true);

    if (nameValue.trim() === "") {      
      return;
    }

    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-control ${isNameInvalid&& `invalid`}`}>
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
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="email"
          onChange={handleInput}
          onBlur={handleBlur}
          value={emailValue}
        />
      </div>

      {isEmailInvalid && (
        <p className="error-text">Enter a fuckin email....</p>
      )}

      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
