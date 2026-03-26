import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  /*
  For passing arrays, objects, etc., ALWAYS pass them in curly brackets
  */
  let myObject = {
    name: "Hritwiz",
    age: 22,
    address: {
      city: "Delhi",
      state: "Delhi",
      country: "India",
    },
  };

  let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h1 className="text-3xl bg-green-500 rounded-4xl">
        Vite + React + Tailwind CSS
      </h1>
      <Card />
      <Card
        place="Old Store Front, Seoul, South Korea"
        author="Jakob Jin"
        src_url="https://images.pexels.com/photos/7237170/pexels-photo-7237170.jpeg"
        alt_text="Photograph of an Old Store's Front"
        myArr={newArray}
        
      />
      <Card
        place="Japan"
        author="Gije Cho"
        src_url="https://images.pexels.com/photos/5392371/pexels-photo-5392371.jpeg"
        alt_text="Buildings in Town"
      />
    </>
  );
}

export default App;
