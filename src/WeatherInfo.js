import React from "react";
import WeatherTemperature from "./WeatherTemperature"
import "./Weather.css"

export default function WeatherInfo (props) {

   return (

       
       <div className="WeatherInfo">

    <h2 className="city" id="city">{props.data.city}</h2>
  <h6 className="text-capitalize" id="description">{props.data.description}</h6>
 

      <div className="row wrapper">
      <div className="col-md-6 padding-0 justify-content-center ">
        <div className="clearfix">
          <div className="float-md-end">

          <img className="mb-5" src={props.data.iconUrl} alt={props.data.description} />
          <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
      <div className="col-md-6 padding-0 mt-5">
        <ul>
          <li>Humidity: {Math.round (props.data.humidity)} %</li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
          <li></li>
        </ul>
      </div>
    </div>

   </div>
       );

}