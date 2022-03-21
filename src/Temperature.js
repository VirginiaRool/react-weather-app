import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const temperature = props.temperature;

  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.temperature * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div>
        {" "}
        <span className="current-temp">{temperature} </span>
        <span className="tempUnits">
          <a href="/#" className="active">
            °C
          </a>{" "}
          |
          <a href="/#" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <span className="current-temp">{fahrenheit()} </span>
        <span className="tempUnits">
          <a href="/#" onClick={showCelsius}>
            °C
          </a>{" "}
          |
          <a href="/#" className="active">
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  }
}
