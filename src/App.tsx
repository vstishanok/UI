import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {

    fetch('http://128.140.64.209:5000/WeatherForecast')
        .then(response => response.json())
        .then(data => {
          setMessage("Today is " + data.weather);
        })
        .catch(error => {
          setMessage("Not found wheaher");
        });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}!</p>
        <a
          className="App-link"
          href="https://www.accuweather.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Weather
        </a>
      </header>
    </div>
  );
}

export default App;
