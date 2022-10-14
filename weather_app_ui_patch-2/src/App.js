import "./App.css";
import data from "./weather.json";
import moon from './crescent-moon.svg';
import Forecast from "./Component/Forecast";
import WeatherDetails from "./Component/WeatherDetails";

function App() {
  return (
    <div className="App">
      {Object.values(data).map((items, index) => (
        <div className="main-wrapper">
          <div className="top-wrapper">
            {items.results.channel.location.city} City,{" "}
            {items.results.channel.location.region},{" "}
            {items.results.channel.location.country}
          </div>
        <div className="top-wrapper-info">
        <div className="top-wrapper-heading-info">
          <span className="heading-temp">
          {items.results.channel.item.condition.code}ᵒ
          </span>
          {items.results.channel.item.condition.text}
        </div>
            <img src={moon} alt="moon-logo" height="90" width="90"/>
        </div>
        <Forecast/>
        <WeatherDetails/>
        </div>
      ))}
    </div>
  );
}

export default App;
