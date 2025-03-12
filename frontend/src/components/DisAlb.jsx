import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import { album, mfu } from '../assets/assets';
import DisplaySong from './DisplaySong';
import './style/Display.css';
import {disalb1} from '../assets/assets'

const DisAlb = () => {
  const { id } = useParams();
  

  // const albumData = album.find(a => a.id === parseInt(id));
 const albumData=album[id];
 console.log(albumData);
const songData=mfu[id];
  return (
    <div>
      <Navbar />
      <div className='disdiv1'>
        <img className='disp' src={albumData.image} alt="Album Cover" />
        <h2 className='albumname'>{albumData.name}</h2>
      </div>
      {/* <div className="song-list">
        {songData.songs.map((song, index) => (
          <div key={index} className="song-item" onClick={() => DisplaySong(song)}>
            <p>{song.name}</p>
          </div> */}
        {/* ) */}
      {/* )}
      </div> */}
    </div>
  );
};

export default DisAlb;
