import React, { useState, useEffect } from 'react';
import Bottle from './Bottle';
import './App.css';

function App() {
  const [permission, setPermission] = useState(false);
  const [acc, setAcc] = useState({ x: 0, y: 0, z: 0 });

  const handleAcceleration = (e) => {
    console.log(e);
    setAcc({
      x: e.acceleration.x,
      y: e.acceleration.y,
      z: e.acceleration.z,
    });
  };

  //Did mount
  useEffect(() => {
    window.addEventListener('devicemotion', handleAcceleration);
    // queryPermission().then((result) => {
    //   setPermission(result);
    //   if (result) {
    //     console.log('it works');
    //     window.addEventListener('devicemotion', handleAcceleration);
    //   }
    // });
  }, []);

  return (
    <div className="App">
      <h1>{`x: ${acc.x}, y: ${acc.y}, z: ${acc.z}`}</h1>
      <div className="container">
        <Bottle />
      </div>
    </div>
  );
}

async function queryPermission() {
  const result = await navigator.permissions.query({
    name: 'accelerometer',
  });
  if (result.state === 'granted') {
    return true;
  }
  return false;
}

export default App;
