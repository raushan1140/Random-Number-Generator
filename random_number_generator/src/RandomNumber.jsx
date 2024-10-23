import React from 'react';
import './RandomNumber.css';

function RandomNumber({ number }) {
  return (
    <div className="number-container">
      <h2>Your Random Number is: {number}</h2>
    </div>
  );
}

export default RandomNumber;
