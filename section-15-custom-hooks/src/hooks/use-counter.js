import { useState, useEffect } from "react";

const useCounter = (startValue, countDirection = "forward") => {
  // We can use React hooks inside of custom hooks.
  // Here we are setting our starting count value
  const [countValue, setCountValue] = useState(startValue);

  countDirection = countDirection.toLowerCase();

  //   We are using useEffect() to create a counter for us
  //  when the component is first mounted.
  useEffect(() => {
    const interval = setInterval(() => {
      try {
        // We are using conditional logic from the second argument
        // to combine the core logic of what type of counter will
        // be used on the component depending on their needs.
        if (countDirection === "forward") {
          setCountValue((prevCounter) => prevCounter + 1);
          return;
        }

        if (countDirection === "backward") {
          setCountValue((prevCounter) => prevCounter - 1);
          return;
        }

        throw new Error("Enter valid count type (forward or backward)");
      } catch (e) {
        console.log(e.message);
      }
    }, 1000);

    return () => clearInterval(interval);

    // It is best practice to add any dependantes just incase
    // there values change inside useEffect().
    // In this case since we do not plan for countDirection to change
    // it could be left off.
  }, [countDirection]);

  //   We can just return countValue as is without the array.
  // If we have more than one we wish to return we can return an object or an array
  // with the values we want to use inside of the component that will be using
  // our custom hook.
  // Arrays are more flexiable since you can name the values whatever you want
  // when they are returned inside of a component.
  // That is the reason why an array is returned when using React hooks. So we
  // can name the returned values to what matches our needs.
  return [countValue];
};

export default useCounter;
