import React from 'react';
import "./notecard.css";

function Notecard({ img, description }) {
  return (
    <div className='card-note'>
      <span>
        <img className='image' src={img} alt='notecard icon' />
      </span>
      <br />
      <p className='description'>{description}</p>
    </div>
  );
}

export default Notecard;
