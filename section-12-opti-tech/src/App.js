import React from "react";
import { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo";

import "./App.css";

function App() {
  const [text, setText] = useState(false);

  console.log("APP_RAN");

  const handleToggle = useCallback(() => {
    const str = "abcdefghijklmnopqrstuvwxyz";

    let newStr = "";

    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * str.length);
      newStr += str[randomNum];
    }

    setText(newStr);
  }, []);

  return (
    <div className="app">
      {<h1>Hi there!</h1>}
      <Demo text={false} />
      <Button onClick={handleToggle}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
