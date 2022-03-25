import React from "react";
import "./WeatherDetails.css";
import Temperature from "./Temperature";
import WeatherForecast from "./WeatherForecast";
import "bootstrap/dist/css/bootstrap.css";
import ActualDate from "./ActualDate";

export default function WeatherDetails(props) {
  if (props.data === undefined) {
    return null;
  }
  let city = props.data.name;
  let icon = props.data.weather[0].icon;
  let description = props.data.weather[0].description;
  let temperature = Math.round(props.data.main.temp);
  let tempMax = Math.round(props.data.main.temp_max);
  let tempMin = Math.round(props.data.main.temp_min);
  let humidity = props.data.main.humidity;
  let wind = props.data.wind.speed;
  let date = new Date(props.data.dt * 1000);

  return (
    <div className="weather-container">
      <div className="app-container">
        <div>
          <ActualDate date={date} />
        </div>
        <div className="row">
          <div className="col-6">
            <div className="date">
              <ul>
                <li className="city-name">{city}</li>
                <li className="temp-description">{description}</li>
                <li>
                  <Temperature temperature={temperature} />
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6">
            <img
              className="weather-image"
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="icon"
            />
          </div>
        </div>
        <div>
          <ul className="forecastDescription">
            <li>Max: {tempMax} °</li>
            <li>Min: {tempMin} °</li>
            <li>Humidity: {humidity} %</li>
            <li>Wind: {wind} km/hr</li>
          </ul>
        </div>
      </div>
      <WeatherForecast />
    </div>
  );
}
