import { Header, Nav, Main, Footer } from "./components";

//console.log(Header, Footer, Main, Nav);

const state = {
  Home: {
    heading: "Home"
  },
  Form: {
    heading: "Form"
  },
  Blog: {
    heading: "Blog"
  },
  Gallery: {
    heading: "Gallery"
  },
  Links: ["Home", "Blog", "Gallery", "Contact"]
};

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(st.Links)}
${Main(st)}
${Footer(st)}`;

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      render(state[event.target.textContent]);
    });
  });
}

render(state);
