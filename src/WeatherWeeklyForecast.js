import React from "react";
import "./index.css";

export default function WeatherWeeklyForecast(props) {
    function day() {
        let date = new Date(props.data.time*1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);

        return `${temperature} °C`
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);

        return `${temperature} °C`
    }

    return (
        <div className="WeatherWeeklyForecast">
            <div className="weather-forecast-date">{day()}</div>
            <Weather iconUrl={props.data.weather[0].icon} size={38} />
            <div className="forecast-temperature">
                <span className="forecast-temperature-max">{maxTemperature()}</span>
                <span className="forecast-temperature-min">{minTemperature()}</span>
            </div>
        </div>
    );
}