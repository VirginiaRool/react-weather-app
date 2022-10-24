import React from "react";
import sun from "./images/sun.svg";
import night from "./images/night.svg";
import few_clouds from "./images/few_clouds.svg";
import scattered_clouds from "./images/scattered_clouds.svg";
import broken_clouds from "./images/broken_clouds.svg";
import shower_rain from "./images/shower_rain.svg";
import rain from "./images/rain.svg";
import thunderstorm from "./images/thunderstorm.svg";
import snow from "./images/snow.svg";
import mist from "./images/mist.svg";
import mist2 from "./images/mist2.svg";
import WeatherDetails from "./WeatherDetails";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": sun,
    "01n": night,
    "02d": few_clouds,
    "02n": few_clouds,
    "03d": scattered_clouds,
    "03n": scattered_clouds,
    "04d": broken_clouds,
    "04n": broken_clouds,
    "09d": shower_rain,
    "09n": shower_rain,
    "10d": rain,
    "10n": rain,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist,
    731: mist2,
    741: mist2,
    761: mist2,
  };

  return <WeatherDetails icon={codeMapping[props.code]} />;
}
