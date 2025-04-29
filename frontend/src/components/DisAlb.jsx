import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import DisplaySong from './DisplaySong';
import { PlayerContext } from '../context/PlayerContext';
import './style/Display.css';

const DisAlb = () => {
  const { id } = useParams(); // album ID
  const { playWithId, likedSongs, toggleLikeSong } = useContext(PlayerContext);

  const [albumData, setAlbumData] = useState({});
  const [songs, setSongs] = useState([]);

  // fetch album and its songs
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

  // helper to check if a song is liked
  const isSongLiked = (songId) => {
    return likedSongs.some(song => song._id === songId);
  };

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
        <p>Like</p>
      </div>

      <hr />
      <div className='albumSongs'>
        {songs.map((song, index) => (
          <div className='disalb1' key={song._id}>
            <div className='songplay' onClick={() => playWithId(song._id, false)}>
              <b>{index + 1}</b>
              <img className='songimg' src={song.image} alt="" />
              {song.name}
            </div>

            <p className='artistname'>{song.artist}</p>
            <p>{albumData.name}</p>

            <button onClick={() => toggleLikeSong(song._id)}>
              {isSongLiked(song._id) ? "❤️" : "🤍"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisAlb;
