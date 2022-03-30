import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import "./WeatherSearch.css";
import background from "./images/background.jpg";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherSearch() {
  let apiKey = "78af43c4b86f6fe747e2eeb5803e94cd";
  let units = "metric";

  let [city, setCity] = useState("");
  let [data, setData] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(function (response) {
        setData(response.data);
      });      
    } else {
      alert(`Enter a city`);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <div
        className="weather-search"
        style={{ backgroundImage: `url(${background})` }}
      >
        <form className="search-city" onSubmit={handleSubmit}>
          <div className="input-group input-group-sm mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Type a city"
              aria-label="Recipient's username"
              aria-describedby="button-search"
              autoFocus="on"
              autoComplete=""
              onChange={updateCity}
            />
            <button
              className="btn button-search"
              type="submit"
              id="button-search"
            >
              Search
            </button>
          </div>
        </form>

        <WeatherDetails data={data} />
      </div>
      <p className="repository">
        <a
          href="https://github.com/VirginiaRool/react-weather-app "
          target="_blank"
          rel="noreferrer"
          id="source-link"
        >
          Open-source code
        </a>
        <span> by Virginia Romero</span>
      </p>
    </div>
  );
}
