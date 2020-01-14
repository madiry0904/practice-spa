import * as views from "./views";

export default st => {
  return `
    <main>
  ${views[st.mainContent](st)}
    </main>
    `;
};
