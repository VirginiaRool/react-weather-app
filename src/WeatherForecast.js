import React from "react";
import WeatherIcon from "./WeatherIcon";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "78af43c4b86f6fe747e2eeb5803e94cd";
  let longitude = 40.7;
  let latitud = 74;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat={latitude}&lon={longitud}&appid={apiKey}`;

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
