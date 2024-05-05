import React, { useState } from "react"; // Corrected import statement

// Removed import statements for logos and CSS as they seem unrelated to the issue

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(420);

  function convertToCelsius(e) {
    const f = parseFloat(e.target.value);
    setCelsius((f - 32) * (5 / 9));
    setFahrenheit(f);
  }
  function convertToFahrenheit(e) {
    const c = parseFloat(e.target.value);
    setFahrenheit(c * (9 / 5) + 32);
    setCelsius(c);
  }

  return (
    <div>
      <h1 className="title">temperature-conversion</h1>
      <div className="card">
        <label>Fahrenheit:</label>
        <input
          type="number"
          onChange={convertToCelsius}
          value={fahrenheit.toFixed(2)}
        ></input>
        <label>Celsius:</label>
        <input
          type="number"
          onChange={convertToFahrenheit}
          value={celsius.toFixed(2)}
        ></input>
      </div>
    </div>
  );
}

export default App; // Moved export outside of the component declaration
