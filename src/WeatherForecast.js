import React, { useState, useEffect } from "react";
import WeatherWeeklyForecast from "./WeatherWeeklyForecast";
import axios from "axios";
import "./index.css";


export default function WeatherForecast(props) {

const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

useEffect (() => {
    setLoaded(false);},
    [props.coordinates]);

    function handleWeatherForecast(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

if (loaded) {

  return (
    <div className="WeatherForcast row">

{forecast.map(function(day, index) {
    if (index < 5 ) {
        return (
            <div className="col-2" key={index}><WeatherWeeklyForecast data={day} /></div>
        );
    } else {
        return (null);
    }

})} </div>

);


} else {
    let apiKey = "3at253b114d8ffb09faf86d264boff05";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleWeatherForecast);
  
    return null;
  }
  
}

 
