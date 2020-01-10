function createListHTML(links) {
  return links
    .map(
      link =>
        `<li class="button"><a href ="./${link.toLowerCase()}/"data-navigo>${link}</a></li>`
    )
    .join("");
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
