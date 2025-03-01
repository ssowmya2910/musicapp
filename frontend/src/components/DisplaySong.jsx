import React, { useState } from 'react';
import './style/DisplaySong.css';
import { assets } from '../assets/assets.js';

const DisplaySong = ({ song }) => {
  return (
    <div className='div1'>
      <div className='play'>
        <img className='img1' src={song.image} alt="Song Cover" />
        <div className='dissong'>
          <p>{song.name}</p>
          <p>{song.artist}</p>
        </div>
        <div className='col'>
          <img src={assets.left} alt="Prev" />
          <img src={assets.play} alt="Play" />
          <img src={assets.right} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default DisplaySong;
