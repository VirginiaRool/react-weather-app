import React from "react";
import WeatherIcon from "./WeatherIcon";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function WeatherForecast(props) {
  
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "c7cd54d7f273febb5e037c3f52d9dfdb";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temp-max">19°C</span>
            <span className="WeatherForecast-temp-min">10°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
