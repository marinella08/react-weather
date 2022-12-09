import React from "react";
import "./Time.css";

export default function Time() {
  let weatherTime = {
    time: "10:30"
  };
  return (
    <div className="Time">
      <div className="time">
        <h3>{weatherTime.time}</h3>
      </div>
    </div>
  );
}
