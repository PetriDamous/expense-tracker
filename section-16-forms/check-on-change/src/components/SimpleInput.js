import { useState } from "react";

const SimpleInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputNotValid, setInputValid] = useState(false);

  const handleInput = (e) => {
    const { value } = e.target;

    setInputValue(value);

    if (value.length) {
      setInputValid(true);
      return;
    }

    if (value.trim() === "") {
      setInputValid(false);
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setInputValid(false);
      return;
    }

    console.log(inputValue);

    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-control ${!isInputNotValid && `invalid`}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handleInput}
          value={inputValue}
        />
      </div>

      {!isInputNotValid && (
        <p className="error-text">Enter a fuckin name please....</p>
      )}

      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
