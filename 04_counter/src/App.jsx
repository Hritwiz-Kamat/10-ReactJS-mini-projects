import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  // let counter = 15;

  const [counter, setCounter] = useState(15); // useState is a function which returns an array
  // 1st item in array is a variable and 2nd is a function.
  // arguement inside useState is the initial value of variable

  // const addValue = () => {
  //   setCounter(counter + 1);
  // };

  const addValue = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
    setCounter((prevCounter) => {
      return prevCounter + 1;
    });
  };

  const subtractValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React course with Hitesh</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={subtractValue}>Remove value</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
