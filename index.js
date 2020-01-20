import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

import capitalize from "lodash.capitalize";

import Navigo from "navigo";

import { getFormDataFromIds } from "./lib";

import { stressIdeas } from "./lib";

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
    if (capitalize(router.lastRouteResolved().url.slice(1)) === "Quiz") {
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();
        const stuff = getFormDataFromIds(event.target.elements);
        const test = stressIdeas(stuff.stress, stuff.time);

        document.querySelector("#ideas").innerHTML = `
        ${test}`;
      });
    }
  })
  .on("/", render())
  .resolve();
