import React from "react";

// function App() {
//   const dom = <h1>Hello World</h1>;
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input
//         type="text"
//         onChange={() => {
//           console.log("I am changed");
//         }}
//       ></input>
//     </React.Fragment>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};
const Cat = () => {
  return <div>fuck you!</div>;
};

export default App;
