function createArticleHTML(posts) {
  return posts
    .map(post => {
      return `
    <article>
    <h2> ${post.title}</h2>
    <p>${post.body}</p>
    </article>
    `;
    })
    .join(" ");
}

export default ({ posts }) => `
  ${createArticleHTML(posts)}`;
