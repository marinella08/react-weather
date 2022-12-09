import React from "react";
import "./Table.css";

export default function Table() {










    function displayForecast(response) {
        let forecast = response.data.daily;
      
        let forecastElement = document.querySelector("#forecast");
      
        let forecastHTML = `<div class="row">`;
        forecast.forEach(function (forecastDay, index) {
          if (index < 6) {
            forecastHTML =
              forecastHTML +
              `
            <div class="col-2">
              <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
              
              <img class="imgWeather" src="" alt="" width="85"/>
              <div class="weather-forecast-temperatures">
                <span class="weather-forecast-temperature-max"> ${Math.round(
                  forecastDay.temp.max
                )}° </span>
                <span class="weather-forecast-temperature-min"> ${Math.round(
                  forecastDay.temp.min
                )}° </span>
              </div>
            </div>
        `;
          }
        });
        forecastHTML = forecastHTML + `</div>`;
        forecastElement.innerHTML = forecastHTML;
      
        const ImgElmentArr = document.querySelectorAll(".imgWeather")
      
        ImgElmentArr.forEach(function (imgEl, index) {
      
          const iconDescription = forecast[index].weather[0].description;
          imgEl.innerHTML = `${iconDescription}`;
      
         if (iconDescription === "clear sky") {
          imgEl.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/168/original/01d.png?1656677804`
          );
        } else if (iconDescription === "few clouds") {
          imgEl.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/169/original/02d.png?1656677813`
          );
        } else if (iconDescription === "scattered clouds") {
          imgEl.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/170/original/03d.png?1656677822`
          );
        } else if (
          iconDescription === "broken clouds" ||
          iconDescription === "overcast clouds"
        ) {
          imgEl.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/171/original/04d.png?1656677838`
          );
        } else if (
          iconDescription === "shower rain" ||
          iconDescription === "light intensity drizzle" ||
          iconDescription === "drizzle" ||
          iconDescription === "heavy intensity drizzle" ||
          iconDescription === "light intensity drizzle rain" ||
          iconDescription === "drizzle rain" ||
          iconDescription === "heavy intensity drizzle rain" ||
          iconDescription === "shower rain and drizzle" ||
          iconDescription === "heavy shower rain and drizzle" ||
          iconDescription === "shower drizzle" ||
          iconDescription === "heavy intensity shower rain" ||
          "ragged shower rain"
        ) {
          imgEl.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/172/original/09d.png?1656677847`
          );
        } else if (
          iconDescription === "rain" ||
          iconDescription === "light rain    " ||
          iconDescription === "moderate rain" ||
          iconDescription === "heavy intensity rain" ||
          iconDescription === "very heavy rain" ||
          iconDescription === "extreme rain"
        ) {
          imgEl.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/173/original/10d.png?1656677854`
          );
        } else if (
          iconDescription === "thunderstorm" ||
          iconDescription === "thunderstorm with light rain" ||
          iconDescription === "thunderstorm with rain" ||
          iconDescription === "thunderstorm with heavy rain" ||
          iconDescription === "light thunderstorm" ||
          iconDescription === "heavy thunderstorm" ||
          iconDescription === "ragged thunderstorm    " ||
          iconDescription === "thunderstorm with light drizzle" ||
          iconDescription === "thunderstorm with drizzle" ||
          iconDescription === "thunderstorm with heavy drizzle"
        ) {
          imgEl.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/174/original/11d.png?1656677860`
          );
        } else if (
          iconDescription === "snow" ||
          iconDescription === "light snow" ||
          iconDescription === "Snow" ||
          iconDescription === "Heavy snow" ||
          iconDescription === "Sleet" ||
          iconDescription === "Light shower sleet" ||
          iconDescription === "Shower sleet" ||
          iconDescription === "freezing rain" ||
          iconDescription === "Light rain and snow" ||
          iconDescription === "Rain and snow" ||
          iconDescription === "Light shower sleet" ||
          iconDescription === "Shower snow" ||
          iconDescription === "Heavy shower snow"
        ) {
          imgEl.setAttribute(
            "src",
            ` https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/175/original/13d.png?1656677869`
          );
        } else if (
          iconDescription === "mist" ||
          iconDescription === "tornado" ||
          iconDescription === "squalls" ||
          iconDescription === "volcanic ash" ||
          iconDescription === "dust" ||
          iconDescription === "sand" ||
          iconDescription === "fog" ||
          iconDescription === "sand/ dust whirls" ||
          iconDescription === "Haze" ||
          iconDescription === "Smoke"
        ) {
          imgEl.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/316/original/50d.png?1656854718`
          );
        } else {
          imgEl.innerHTML = null;
        }
        })
      }
      
      function getForecast(coordinates) {
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayForecast);
      }
      
      //SEARCH TEMPERATURE
      function showWeather(response) {
        console.log(response.data);
      
        let temperature = Math.round(response.data.main.temp);
        let tempElment = document.querySelector("#temperature");
        tempElment.innerHTML = `${temperature}°C`;
      
        let feelsLike = Math.round(response.data.main.feels_like);
        let feelsElment = document.querySelector("#feelsLike");
        feelsElment.innerHTML = `${feelsLike} °C`;
      
        let humidity = response.data.main.humidity;
        let humidityElment = document.querySelector("#humidity");
        humidityElment.innerHTML = `${humidity} %`;
      
        let pressure = response.data.main.pressure;
        let pressureElment = document.querySelector("#pressure");
        pressureElment.innerHTML = `${pressure} hPa`;
      
        let wind = Math.round(response.data.wind.speed);
        let windElment = document.querySelector("#wind");
        windElment.innerHTML = `${wind} m/s`;
      
        let description = response.data.weather[0].description;
        let descriptionElment = document.querySelector("#description");
        descriptionElment.innerHTML = `${description}`;
      
        let sunrise = response.data.sys.sunrise;
        let sunriseCal = new Date((sunrise + response.data.timezone) * 1000);
        let h = "0" + sunriseCal.getHours();
        let m = "0" + sunriseCal.getMinutes();
        let t = h + ":" + m.substr(-2);
        let sunriseElment = document.querySelector("#sunrise");
        sunriseElment.innerHTML = `${t}`;
      
        let sunset = response.data.sys.sunset;
        let sunsetCal = new Date((sunset + response.data.timezone) * 1000);
        let hour = sunsetCal.getHours();
        let min = "0" + sunsetCal.getMinutes();
        let time = hour + ":" + min.substr(-2);
      
        let sunsetElment = document.querySelector("#sunset");
        sunsetElment.innerHTML = `${time}`;
      
        //ICON
          let iconElment = document.querySelector("#icon");
        if (description === "clear sky") {
          iconElment.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/168/original/01d.png?1656677804`
          );
        } else if (description === "few clouds") {
          iconElment.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/169/original/02d.png?1656677813`
          );
        } else if (description === "scattered clouds") {
          iconElment.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/170/original/03d.png?1656677822`
          );
        } else if (
          description === "broken clouds" ||
          description === "overcast clouds"
        ) {
          iconElment.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/171/original/04d.png?1656677838`
          );
        } else if (
          description === "shower rain" ||
          description === "light intensity drizzle" ||
          description === "drizzle" ||
          description === "heavy intensity drizzle" ||
          description === "light intensity drizzle rain" ||
          description === "drizzle rain" ||
          description === "heavy intensity drizzle rain" ||
          description === "shower rain and drizzle" ||
          description === "heavy shower rain and drizzle" ||
          description === "shower drizzle" ||
          description === "heavy intensity shower rain" ||
          "ragged shower rain"
        ) {
          iconElment.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/172/original/09d.png?1656677847`
          );
        } else if (
          description === "rain" ||
          description === "light rain    " ||
          description === "moderate rain" ||
          description === "heavy intensity rain" ||
          description === "very heavy rain" ||
          description === "extreme rain"
        ) {
          iconElment.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/173/original/10d.png?1656677854`
          );
        } else if (
          description === "thunderstorm" ||
          description === "thunderstorm with light rain" ||
          description === "thunderstorm with rain" ||
          description === "thunderstorm with heavy rain" ||
          description === "light thunderstorm" ||
          description === "heavy thunderstorm" ||
          description === "ragged thunderstorm    " ||
          description === "thunderstorm with light drizzle" ||
          description === "thunderstorm with drizzle" ||
          description === "thunderstorm with heavy drizzle"
        ) {
          iconElment.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/174/original/11d.png?1656677860`
          );
        } else if (
          description === "snow" ||
          description === "light snow" ||
          description === "Snow" ||
          description === "Heavy snow" ||
          description === "Sleet" ||
          description === "Light shower sleet" ||
          description === "Shower sleet" ||
          description === "freezing rain" ||
          description === "Light rain and snow" ||
          description === "Rain and snow" ||
          description === "Light shower sleet" ||
          description === "Shower snow" ||
          description === "Heavy shower snow"
        ) {
          iconElment.setAttribute(
            "src",
            ` https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/175/original/13d.png?1656677869`
          );
        } else if (
          description === "mist" ||
          description === "tornado" ||
          description === "squalls" ||
          description === "volcanic ash" ||
          description === "dust" ||
          description === "sand" ||
          description === "fog" ||
          description === "sand/ dust whirls" ||
          description === "Haze" ||
          description === "Smoke"
        ) {
          iconElment.setAttribute(
            "src",
            `https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/316/original/50d.png?1656854718`
          );
        } else {
          iconElment.innerHTML = null;
        }
      
        getForecast(response.data.coord);
      }
    ;
  return (
   
  );
}