import { Header, Nav, Main, Footer } from "./components";

import * as state from "./store";

import capitalize from "lodash.capitalize";

import Navigo from "navigo";

import axios from "axios";

import { db } from "./firebase";

import { getFormDataFromIds } from "./lib";

import { lowStress } from "./stress";

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
    if (capitalize(router.lastRouteResolved().url.slice(1)) === "Form") {
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();

        document.querySelector("#mental-health-ideas").innerHTML;
        console.log(lowStress(event.target.elements[time]));
        console.log(lowStress(event.target.elements[stress]));
      });
    }
  })
  .on("/", render())
  .resolve();
