import React from "react";
import "./WeatherWeeklyForecast.css";

export default function WeatherWeeklyForecast(props) {
  
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature} °C`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);

    return `${temperature} °C`;
  }

  return (
    <div className="WeatherWeeklyForecast float-end">
      <div className="weather-forecast-date">{day()}</div>
      <img src={props.data.condition.icon_url} alt={props.data.description} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemperature()}</span>
        
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}