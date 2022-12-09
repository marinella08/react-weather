import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let weatherTemp = {
    temp: "25"
  };
  return (
    <div className="Temperature">
      <div className="temperature-city">
        <h1>{weatherTemp.temp}°C</h1>
      </div>
    </div>
  );
}
