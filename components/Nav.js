function createListHTML(links) {
  return links.map(link => `<li class="button">${link}</li>`).join("");
}

export default st => {
  console.log(st);
  return `
  <nav>
  <ul class ="flex button justify-space-around">
  ${createListHTML(st)}
  </ul>
</nav>`;
};
