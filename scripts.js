//querySelector accepts ANY CSS Selector as a string

const form = document.querySelector("form");
/**
 * 1. Listen for an Event
 * 2. . Use a callback function when this even occurs
 */

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("I am submitted");
});
console.log(form);
