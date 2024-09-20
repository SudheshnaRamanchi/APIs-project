import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '9c95f845ae11045f135a8a4225d510e9';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('City not found. Please enter a valid city name.');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <> 
      <div className="hello col-md-12">
        <img src='/img 3.jpg' alt="Weather" />
      </div> 

      <div className='weather-container'>
        <div className='weather-header'>
          <h1>Weather Finder</h1>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
            />
            <button type="submit">Search</button>
          </form>
        </div>

        {error && <p>{error}</p>}

        {weatherData && (
          <div>
            <h2>Weather in {weatherData.name}</h2>
            <img 
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
              alt={weatherData.weather[0].description}
              className="weather-icon"
            />
            <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)} °C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;









