import React, { useState }from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css"

export default function Weather(props) {

const [weatherData, setWeatherData] = useState({ready:false});
const [city, setCity] = useState (props.defaultCity);

  function handleResponse(response) {
  console.log(response.data);

   setWeatherData({
    ready: true, 
     temperature: response.data.temperature.current,
     humidity: response.data.temperature.humidity,
     date: new Date(response.data.time * 1000),
     description: response.data.condition.description,
     iconUrl: response.data.condition.icon_url,
     wind: response.data.wind.speed,
     city: response.data.city

   });
  }

function handleSubmit (event) {
  event.preventDefault();
  search();
}

function handleChangeCity (event) {
 setCity(event.target.value);

}

function search () {
  const apiKey = "3at253b114d8ffb09faf86d264boff05"
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`

  axios.get(apiUrl).then(handleResponse);
}

if(weatherData.ready) {

  return (
    
  <div className="Weather">
    
     <h3><FormattedDate date={new Date()} /></h3>
   
  
<form onSubmit={handleSubmit}>
 <div className="row">
  <div className="col-9">

    <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" onChange={handleChangeCity}/>
 </div>
  <div className="col-md-3">
    <input type="submit" value=" 🔍 Search" className="btn btn-primary " />
   
  </div>
 </div>
</form>
<WeatherInfo data={weatherData}/>



    </div>

  
  )

} else {

  search();
  return "Loading...";
}
}
