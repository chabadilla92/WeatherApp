import logo from './logo.svg';
import './App.css';

import React, {useState} from "react";
import WeatherDisplay from './Components/WeatherInf.js'
import Form from './Components/Form.js'


function App() {
  const apiKey = "ab1ec8aed2095355d807f3697a9bffd4";
  const [weather, setWeather] = useState(null)
  const getWeather = async (searchZip) => {
    const response = await fetch (
      `http://api.openweathermap.org/data/2.5/weather?zip=${searchZip},us&units=imperial&appid=${apiKey}` // searchWeather included in link?
    );
    const data = await response.json();
    setWeather(data);
  }
  
  return (
    <div className="App">
      <h1>Weather App</h1> 
      <Form weathersearch={getWeather}/>
      <WeatherDisplay weather={weather}/>
    </div>
  );
}

export default App;
