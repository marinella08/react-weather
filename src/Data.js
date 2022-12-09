import React from "react";
import "./Data.css";

export default function Data() {
  let weatherData = {
    data: "Monday 06/10/2022"
  };
  return (
    <div className="Data">
      <div className="date">
        <h3>{weatherData.data}</h3>
      </div>
    </div>
  );
}
