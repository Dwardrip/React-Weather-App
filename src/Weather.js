import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast";
import WeatherTemperature from "./WeatherTemperature";

import Footer from "./Footer";

import axios from "axios";
import "./index.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ ready: false });

  function displayWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function displayCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "bb7d3a16c0a16792a34131254852ed9f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="SearchForm">
          <form onSubmit={handleSubmit}>
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col-9">
                  <input
                    className="form-control me-auto"
                    type="search"
                    id="input-city"
                    placeholder="Enter your location"
                    autocomplete="off"
                    autofocus="on"
                    onChange={displayCity}
                  />
                  <button type="submit" className="btn btn-info" id="lookUp">
                    🔍Search
                  </button>
                  <button
                    type="button"
                    id="current-location-button"
                    className="btn btn-light"
                  >
                    🔍 Find Me
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="row" id="overview">
          <h4 className="city" id="city">
            {weather.city}
          </h4>
          <h6 className="description" id="description">
            {weather.description}
          </h6>
        </div>

        <div className="row wrapper">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src={weather.iconUrl}
                alt={weather.description}
                className="weather-icon"
              />
            
            <span>
              <WeatherTemperature celsius={weather.temperature} />
            </span>
                  </div>
          </div>
          <div className="col-6 weather-detail">
            <ul>
              <li>
                Humidity: <span id="humidity">{weather.humidity}</span> %
              </li>
              <li>
                Wind: <span id="wind">{weather.wind}</span> km/h
              </li>
            </ul>
          </div>
        </div>
        <WeatherForecast
          coordinates={weather.coordinates}
          city={weather.city}
        />
        <Footer />
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col-9">
              <input
                className="form-control me-auto"
                type="search"
                id="input-city"
                placeholder="Enter your location"
                autocomplete="off"
                autofocus="on"
                onChange={displayCity}
              />
              <button type="submit" className="btn btn-info" id="lookUp">
                🔍Search
              </button>
              <button
                type="button"
                id="current-location-button"
                className="btn btn-light"
              >
                🔍 Find Me
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
