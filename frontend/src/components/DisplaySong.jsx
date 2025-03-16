import React, { useContext, useState } from 'react';
import './style/DisplaySong.css';
import { assets } from '../assets/assets.js';
import { PlayerContext } from '../context/PlayerContext.jsx';

const DisplaySong = () => {
  const {track,seekBar,seek,playStatus,play,pause,time}=useContext(PlayerContext)
  return (
    <div className='div1'>
      <div className='play'>
        <img className='img1' src={track.image} alt="Song Cover" />
        <div className='dissong'>
          <p>{track.name}</p>
          <p>{track.artist}</p>
        </div>
        <div className='col'>
          <img src={assets.left} alt="Prev" />
          {playStatus? <img onClick={pause} src={assets.pause} alt="pause" />:
            
           
          <img onClick={play} src={assets.play} alt="Play" />}

          <img src={assets.right} alt="Next" />
        </div>
        <div className='playsong'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seek} className='so1'>
            <hr ref={seekBar} className='playline'/>
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
         
        </div>
      </div>
    </div>
  );
};

export default DisplaySong;
