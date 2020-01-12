import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

import capitalize from "lodash.capitalize";

import Navigo from "navigo";

import axios from "axios";

console.log("Navigo");

console.log(location.pathname.slice(1));

const router = new Navigo(location.origin);

//console.log(Header, Footer, Main, Nav);

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
  .resolve();

render();

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(results => {
    state.Position.posts = results.data;
    console.log(results);
  })
  .catch(error => console.log(error));
