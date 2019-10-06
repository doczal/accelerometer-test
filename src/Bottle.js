import React from 'react';
import './Bottle.css';

function Bottle({ rotated, position }) {
  return (
    <div className={`bottle ${position} ${rotated ? `rotated` : ''}`}></div>
  );
}

export default Bottle;
