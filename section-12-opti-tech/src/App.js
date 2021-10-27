import React from "react";
import { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo";

import "./App.css";

function App() {
  const [text, setText] = useState(false);

  console.log("APP_ran");

  // randomState will be a variable that we will
  // use inside of useCallback().
  const [randomState, setRandomState] = useState(false);

  const handleToggle = useCallback(() => {
    // randomState will be false the first time the Component is mounted.
    // This value will stay false even on re-evaluation.
    // The function in useCallback() encloses the randomState variable.
    // It will now always be the same since useCallback() is used to store a
    // function in memory and prevent this function from being re-created
    console.log(randomState);

    // Since this value is always false this conditional block never runs.
    if (randomState) {
      const str = "abcdefghijklmnopqrstuvwxyz";

      let newStr = "";

      for (let i = 0; i < 5; i++) {
        const randomNum = Math.floor(Math.random() * str.length);
        newStr += str[randomNum];
      }

      setText(newStr);
    }
  }, [randomState]);

  const handleRandomState = () => {
    setRandomState((prev) => !prev);
  };

  // When handleRandomState runs the value of randomState will change.
  // The same value inside of the function passed to useCallback() will never
  // change because useCallback() is used to store that fucntion in memory
  // so the function is never re-created.  It is still the same function holding
  // the false value for randomState from when it first ran.
  console.log(randomState);

  return (
    <div className="app">
      {<h1>Hi there!</h1>}
      <Demo text={text} />
      <Button onClick={handleRandomState}>Toggle Random State</Button>
      <Button onClick={handleToggle}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
