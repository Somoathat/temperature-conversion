import React, { useState } from "react"; // Corrected import statement

// Removed import statements for logos and CSS as they seem unrelated to the issue

function App() {
  const [count, setCount] = useState(0);
  const [celsius, setCelsius] = useState(0);

  function convertToCelsius(e) {
    const f = parseFloat(e.target.value);
    setCelsius((f - 32) * (5 / 9));
  }

  return (
    <div>
      <h1>temperature-conversion</h1>
      <div className="card">
        <label>Fahrenheit:</label>
        <input type="number" onChange={convertToCelsius}></input>
        {celsius && <span>celsius: {celsius.toFixed(2)}</span>}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App; // Moved export outside of the component declaration
