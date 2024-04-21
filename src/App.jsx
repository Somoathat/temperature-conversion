import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [celsius, setCelsius] = useState(0);
  function convertToCelsius(e) {
    const f = parseFloat(e.target.value);
    setCelsius((f - 32) * (5 / 9));
  }

  return (
    <>
      <h1>temperature-conversion</h1>
      <div className="card">
        <label>Fahrenheit:</label>
        <input type="number" onChange={convertToCelsius}></input>
        <span>celsius: {celsius.toFixed(2)}</span>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
