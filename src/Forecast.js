import React from "react";
import "./Forecast.css";

export default function Forecast() {
  let weatherForecast = {
    feels: "22",
    humidity: "24",
    pressure: "4",
    wind: "3",
    sunset: "20:30",
    sunrise: "06:00"
  };
  return (
    <div className="Forecast">
      <table className="table-wind">
        <thead>
          <tr>
            <th scope="row" className="rowDesc">Feels like:</th>
            <td>{weatherForecast.feels} °C</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="rowDesc">Humidity:</th>
            <td>{weatherForecast.humidity} %</td>
          </tr>
          <tr>
            <th scope="row" className="rowDesc">Pressure:</th>
            <td>{weatherForecast.pressure} hPa</td>
          </tr>
          <tr>
            <th scope="row" className="rowDesc">Wind:</th>
            <td>{weatherForecast.wind} m/s</td>
          </tr>
          <tr>
            <th scope="row" className="rowDesc">Sunrise:</th>
            <td>{weatherForecast.sunrise}</td>
          </tr>
          <tr>
            <th scope="row" className="rowDesc">Sunset:</th>
            <td>{weatherForecast.sunset}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
