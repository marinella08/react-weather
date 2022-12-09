import React from "react";
import "./City.css";

export default function City() {
  let CityData = {
    city: "Kyiv"
  };
  return (
    <div className="City">
      <div className="city">
        <h2>{CityData.city}</h2>
      </div>
    </div>
  );
}
