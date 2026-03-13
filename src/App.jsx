import * as d3 from "d3";

function App() {
  const data = [4, 8, 15, 16, 23, 42];
  console.log("Max:", d3.max(data));

  return (
    <div>
      <h1>D3 and React</h1>
      <p>Check the console for the D3 result!</p>
    </div>
  );
}

// THIS IS THE MISSING LINE:
export default App;
