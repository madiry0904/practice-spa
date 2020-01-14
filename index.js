import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

import capitalize from "lodash.capitalize";

import Navigo from "navigo";

import axios from "axios";

console.log("Navigo");

console.log(location.pathname.slice(1));
//console.log(Header, Footer, Main, Nav);

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

render();

// 'fetch' returns a PROMISE.
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(results => {
    state.Blog.posts = results.data;

    if (capitalize(router.lastRouteResolved().url.slice(1)) === "Blog") {
      render(state.Blog);
    }
  })
  .catch(error => console.error(error));
