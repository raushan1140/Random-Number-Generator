import React, { useState } from 'react';
import RandomNumber from './RandomNumber';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
    setRandomNumber(number);
  };

  return (
    <div className="container">
      <h1>Random Number Generator</h1>
      <button onClick={generateRandomNumber} className="button">
        Generate Random Number
      </button>
      {randomNumber !== null && <RandomNumber number={randomNumber} />}
    </div>
  );
}

export default App;
