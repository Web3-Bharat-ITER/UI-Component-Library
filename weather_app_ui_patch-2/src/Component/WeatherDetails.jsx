import React from "react";
import "./weatherDetails.css";
import Data from '../weather.json';

const WeatherDetails = () => {
  return <div className="weatherDetails-wrapper">{Object.values(Data).map((items)=>(
    <div>
        Weather Today in {" " + items.results.channel.location.city}
        {" "+items.results.channel.location.country}
        <h1>
            {items.results.channel.item.condition.code}ᵒ<br/>
        </h1>
            Feels like
        <div className="weather-details-info-wrapper">
            <div className="weather-details-info">Humidity 
            <span>
            {" "+items.results.channel.atmosphere.humidity}%
            </span>
            </div>
            <div className="weather-details-info">Pressure
            <span>
            {" "+ items.results.channel.atmosphere.pressure}%
            </span></div>
            <div className="weather-details-info">
                Visibility 
                <span>
                    {" " + items.results.channel.atmosphere.visibility}
                </span>
            </div>
            <div className="weather-details-info">
                Sunrise 
                <span>
                    {items.results.channel.astronomy.sunrise}
                </span>
            </div>
            <div className="weather-details-info">
                Wind 
                <span>
                    {items.results.channel.wind.speed} {items.results.channel.units.speed}
                </span>
            </div>
            <div className="weather-details-info">
                Sunset 
                <span>
                    {items.results.channel.astronomy.sunset}
                </span>
            </div>
        </div>  
    </div>
  ))}</div>;
};

export default WeatherDetails;
