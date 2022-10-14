import Data from "../weather.json";
import "./Forecast.css";
import Carousel from "react-elastic-carousel";

import React from "react";
const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 700, itemsToShow: 3 },
];

const Forecast = () => {
  return (
    <div className="forecast-wrapper">
      {Object.values(Data).map((items, index) => (
        <>
          <Carousel
            itemsToShow={3}
            itemPadding={[20, 0]}
            breakPoints={breakpoints}
          >
            {items.results.channel.item.forecast?.map((item) => (
              <div className="forecast-info">{item.date}
              <h3 className="forecast-day">
              {item.day}
              </h3>
              <h2 className="exact-temp">{item.code}ᵒ</h2>
              <span>{item.text}</span>
              <div></div>
              </div>
            ))}
          </Carousel>
        </>
      ))}
    </div>
  );
};

export default Forecast;
