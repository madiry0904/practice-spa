import { Header, Main, Footer } from "./components";
//console.log(Header, Nav, Main, Footer);

const state = {
  Home: {
    heading: "Home"
  },
  Quiz: {
    heading: "Quiz"
  },
  Gallery: {
    heading: "STL Resources"
  }
};

document.querySelector("#root").innerHTML = `${Header()} ${Main} ${Footer}`;
