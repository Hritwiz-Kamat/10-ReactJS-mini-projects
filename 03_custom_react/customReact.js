const reactElement = {
  types: "a",
  props: {
    href: "https://www.youtube.com",
    target: "_blank",
  },
  // props is just an attribute | you can call it whatever you like
  children: "Click me to visit youtube",
};

function customRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement["types"]);
  domElement.innerHTML = reactElement["children"];
  domElement.setAttribute("href", reactElement["props"]["href"]);
  domElement.setAttribute("target", reactElement["props"]["target"]);

  container.appendChild(domElement);
  */

  const domElement = document.createElement(reactElement.types);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}
const mainContainer = document.querySelector("#root");

// reactElement -> Its the element thats need to be injected
// mainContainer -> Place where it should be injected
customRender(reactElement, mainContainer);
