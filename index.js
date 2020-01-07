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

document.querySelector("#root").innerHTML = `${Header(state.Home)}
${Main()}
 ${Footer()}`;

//TODO LISTEN FOR CLICKS ON OUR MENU AND LOG WHAT WAS CLICKED

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event.target.textContent);

    //TODO: USE THIS INFORMATION AND LOG OUT THE CORRECT PIECE OF STATE
    console.log(state[event.target.textContent]); //MUST USE BRACKET NOTATION HERE
  });
});
