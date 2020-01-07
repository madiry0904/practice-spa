export default function(st) {
  return `
  <header>
  <h1>${st.heading}</h1>
  <nav>
  <ul>
    <li class = "button"><a href="#">Home</a></li>
    <li class = "button"><a href = "./quiz/">Quiz</a></li>
    <li class = "button"><a href = "../resources/">STL Resources</a></li>
  </ul>
  </nav>
  </header>`;
}

//Arrow Syntax
/*export default ()=>
`header.........`
*/
