import { Header, Main, Footer } from "./components";
//console.log(Header, Nav, Main, Footer);

const state = {
  Home: {
    heading: "Mental Health Made Simple"
  },
  Quiz: {
    heading: "Quiz"
  },
  Gallery: {
    heading: "STL Resources"
  }
};

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `${Header(st)}
 ${Main(st)}
 ${Footer(st)}`;
}
render();

//renders your page before you start to query the page
//TODO LISTEN FOR CLICKS ON OUR MENU AND LOG WHAT WAS CLICKED

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    //console.log(event.target.textContent);

    //TODO: USE THIS INFORMATION AND LOG OUT THE CORRECT PIECE OF STATE
    render(state[event.target.textContent]); //MUST USE BRACKET NOTATION HERE
  });
});
