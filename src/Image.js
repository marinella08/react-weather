import React from "react";
import "./Image.css";

export default function Image() {
  let weatherDescr = {
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  };
  return (
    <div className="Image">
      <div className="pic-weather">
        <img src={weatherDescr.imgUrl} alt="Clear" className="float-centre" />
        <div className="description">{weatherDescr.description}</div>
      </div>
      

      </div>


  );
}
