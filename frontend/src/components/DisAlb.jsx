import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import DisplaySong from './DisplaySong';
import { PlayerContext } from '../context/PlayerContext';
import './style/Display.css';
import { assets } from '../assets/assets';
const DisAlb = () => {
  const { id } = useParams(); // album ID
  const { playWithId,likedSongs, toggleLikeSong } = useContext(PlayerContext);

  const [albumData, setAlbumData] = useState({});
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    const fetchAlbumAndSongs = async () => {
      try {
        const albumRes = await axios.get("https://isaiwreathe.onrender.com/api/songs/albums");
        const album = albumRes.data.find(a => a._id === id);
        setAlbumData(album);
  
        const songsRes = await axios.get(`https://isaiwreathe.onrender.com/api/songs/album/${id}/songs`);
        setSongs(songsRes.data);
      } catch (err) {
        console.error("Error loading album or songs", err);
      }
    };
  
    fetchAlbumAndSongs();
  }, [id]);
  

  return (
    <div>
      <Navbar />
      <DisplaySong />

      <div className='disdiv1' style={{ backgroundColor: albumData.backgroundColor || '#333' }}>
        <img className='disp' src={albumData.image} alt="Album Cover" />
        <h2 className='albumname'>{albumData.name}</h2>
      </div>
      

      <div className='header'>
        <p><b className='tit'>#</b> Title</p>
        <p>Artist</p>
        <p>Album</p>
      </div>

      <hr />
      <div className='albumSongs'>
        {songs.map((song, index) => (
          <div className='disalb1' key={song._id} onClick={() => playWithId(song._id, false)}>
            <p className='songplay'>
              <b>{index + 1}</b>
              <img className='songimg' src={song.image} alt=""/>
              {song.name}
            </p>
            <div
      className="likeIcon"
      onClick={() => toggleLikeSong(song._id)}
      style={{ cursor: "pointer" }}
    >
      {likedSongs.some(s => s._id === song._id) ?  "💜":"🤍" }
    </div>
            <p className='artistname'>{song.artist}</p>
            <p>{albumData.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisAlb;
