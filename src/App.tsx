import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const response = await fetch(
		'/WeatherForecast',
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> `Today is  ${response}!`</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
