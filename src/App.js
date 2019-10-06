import React, { useState, useEffect } from 'react';
import Bottle from './Bottle';
import './App.css';

function App() {
  const [acc, setAcc] = useState({ x: 0, y: 0, z: 0 });

  const handleAcceleration = (e) => {
    console.log(e);
    const { x, y, z } = e.accelerationIncludingGravity;
    setAcc({ x, y, z });
  };

  //Did mount
  useEffect(() => {
    window.addEventListener('devicemotion', handleAcceleration);
  }, []);

  return (
    <div className="App">
      <h1>{`x: ${acc.x && acc.x.toFixed(2)}, y: ${acc.y &&
        acc.y.toFixed(2)}, z: ${acc.z && acc.z.toFixed(2)}`}</h1>
      <div className="container">
        <Bottle />
      </div>
    </div>
  );
}

export default App;
