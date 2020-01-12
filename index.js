import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(state.Links)}
${Main(st)}
${Footer(st)}`;
  document.querySelectorAll("nav ul").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      render(state[event.target.textContent]);
    });
  });
}
render();

console.log("whatever");

/*
import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

import Navigo from "navigo";
import capitalize from "lodash.capitalize";

const router = new Navigo(location.origin);

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
${Header(st)}
${Nav(state.Links)}
${Main(st)}
${Footer(st)}`;
  router.updatePageLinks();
}
router
  .on(":page", params => {
    render(state[capitalize(params.page)]);
  })
  .on("/", () => render())
  .resolve();

// 'fetch' returns a PROMISE.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(results => results.json())
  .then(json => {
    console.log(json);
  });
*/
