import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const AnotherElement = (
  <a href="https://www.youtube.com/" target="_blank">
    Visit Youtube
  </a>
);

// Below is a react element. Its MUST be written in a strict format of React | Refer to Custom React folder
const ActualReactElement = React.createElement(
  "a", // Element
  { href: "https://www.instagram.com/", target: "_blank" }, // Attribute
  "click to visit instagram", // Children
);

createRoot(document.getElementById("root")).render(
  <>
    <App />
    {AnotherElement}
    {ActualReactElement}
  </>,
);
