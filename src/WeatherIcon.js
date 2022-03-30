import React from "react";
import "sun" from "./images/sun.svg";
import "night" from "./images/night.svg";
import "few_clouds" from "./images/few_clouds.svg";


export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": sun,
    /* "01n": "night",
    "02d": "few_clouds",
    "02n": "few_clouds",
    "03d":"scattered_clouds",
    "03n":"scattered_clouds",
    "04d":"broken_clouds",
    "04n":"broken_clouds",
    "09d":"shower_rain",
    "09n":"shower_rain",
    "10d":"rain",
    "10n":"rain",
    "11d":"thunderstorm",
    "11n":"thunderstorm",
    "13d":"snow",
    "13n":"snow",
    "50d":"mist",
    "50n":"mist", */




  };

  return (
      icon={codeMapping[props.sun]};
  )
}
