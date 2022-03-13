import "./App.css";
import broken_clouds from "./images/broken_clouds.svg";
import background from "./images/background.jpg";

export default function App() {
  let styleObj = { backgroundImage: `url(${background})` };
  return (
    <div className="external-container">
      <div className="app-container" style={styleObj}>
        <div className="row">
          <div className="col-6">
            <form className="search-city">
              <div className="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a city"
                  aria-label="Recipient's username"
                  aria-describedby="button-search"
                  autoFocus="on"
                  autoComplete=""
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

            <ul className="forecastDescription">
              <li className="lastUpdated">Last updated: 12:00</li>
              <li className="actualHumidity">Humidity: 5 %</li>
              <li className="actualWind">Wind: 2 km/hr</li>
              <li className="showMaxTemp">Max: 25 °</li>
              <li className="showMinTemp">Min: 14 °</li>
            </ul>
          </div>

          <div className="col-6">
            <div className="actualData">
              <ul>
                <li className="city-name">Guadalajara</li>
                <li
                  id="temperature"
                  className="d-flex align-items-start justify-content-end"
                >
                  <span className="current-temp">20 </span>
                  <span className="tempUnits">
                    <a href="/#" className="active">
                      °C
                    </a>{" "}
                    |<a href="/#"> °F</a>
                  </span>
                </li>
                <li className="temp-description">Broken clouds</li>
                <li>
                  <img
                    className="weather-image"
                    src={broken_clouds}
                    alt=""
                    id="icon"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="repository">
        <a
          href="https://github.com/VirginiaRool/react-weather-app"
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
