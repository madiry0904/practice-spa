function createListHTML(links) {
  return links
    .map(
      link =>
        `<li id="nav-buttons"><a href ="./${link}/"data-navigo>${link}</a></li>`
    )
    .join("");
}

export default st => {
  return `
  <nav class="flex menu-wrap justify-end" >
    <ul>
    ${createListHTML(st)}
  </ul>
  </nav>`;
};
