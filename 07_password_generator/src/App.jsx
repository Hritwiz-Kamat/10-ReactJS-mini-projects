import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (symbolsAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i < length; i++) {
      const random_index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(random_index);
      // Math.random() → returns a random decimal: 0 <= r < 1
      // Math.random() * str.length → scales it to: 0 <= r < str.length
      // + 1 → shifts range to: 1 <= r < str.length + 1
      // Math.floor(...) → rounds DOWN to nearest integer
      // Final result: a random INTEGER from 1 to str.length (inclusive)

      // ⚠️ NOTE: This is NOT a valid string index (indices start at 0)
      // For a valid random index use: Math.floor(Math.random() * str.length)
      // → gives 0 to str.length - 1
    }

    setPassword(pass);
  }, [length, numberAllowed, symbolsAllowed]);

  /*
  useEffect = run side effects when something changes
  
  useCallback = memoize a function so its identity is stable
  */
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, symbolsAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(event) => {
                setLength(event.target.value);
              }}
              name=""
              id=""
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => {
                  !prev;
                });
              }}
              name=""
              id=""
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={symbolsAllowed}
              onChange={() => {
                setSymbolsAllowed((prev) => {
                  !prev;
                });
              }}
              name=""
              id=""
            />
            <label htmlFor="symbol">Symbols</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
