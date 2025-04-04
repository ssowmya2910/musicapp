import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import { album } from '../assets/assets';
import './style/Display.css';
import {disalb1} from '../assets/assets'
import { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext.jsx';
import DisplaySong from './DisplaySong.jsx';
import Sidebar from './Sidebar.jsx';
const DisAlb = () => {
  const { id } = useParams();
  const { playWithId } = useContext(PlayerContext);  

  const albumData = album[id]; 
  const albumSongs = disalb1.filter(song => song.albumId === id); 
  return (
    <div>
      <Navbar />
      {/* <Sidebar/> */}
      <DisplaySong/>
      <div className='disdiv1' style={{backgroundColor:albumData.backgroundcolor}}>
        <img className='disp' src={albumData.image} alt="Album Cover" />
        <h2 className='albumname'>{albumData.name}</h2>
      </div>
      
      <div className='header'>
        <p><b className='tit'>#</b>Title</p>
        <p>Artist</p>
        <p>Album</p>
      </div>
      
      <hr/>
      <div className='albumSongs'>
        {albumSongs.map((item, index) => (
          <div className='disalb1' key={item.id} onClick={() => playWithId(item.id, false)}> 
            <p className='songplay'>
              <b>{index + 1}</b>
              <img className='songimg' src={item.image} alt=""/>
              {item.name}
   
            </p>
           <p className='artistname'>{item.artist}</p>
            <p>{albumData.name}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default DisAlb;
