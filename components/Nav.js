function createListHTML(links) {
  return links.map(link => {
    return `<li>${link}</li>`;
  });
}

export default st => {
  console.log(st);
  return `
  <nav>
  <ul class ="flex justify-space-around">
  ${createListHTML(st)}
  </ul>
</nav>`;
};
