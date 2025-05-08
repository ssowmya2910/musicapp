import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import DisplaySong from './DisplaySong';
import { PlayerContext } from '../context/PlayerContext';

const LikedSongs = () => {
  const { userId, playWithId, likedSongs, toggleLikeSong } = useContext(PlayerContext);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchLiked = async () => {
      try {
        const res = await axios.get(`https://isaiwreathe.onrender.com/api/user/liked/${userId}`);
        setSongs(res.data);
      } catch (err) {
        console.error("Error fetching liked songs", err);
      }
    };

    fetchLiked();
  }, [userId, likedSongs]); // refetch when likes change

  return (
    <div>
      <Navbar />
      <DisplaySong />
      <h2> Liked Songs</h2>
      <div className="albumSongs">
        {songs.map((song, index) => (
          <div className='disalb1' key={song._id}>
            <div className='songplay' onClick={() => playWithId(song._id, false)}>
              <b>{index + 1}</b>
              <img className='songimg' src={song.image} alt="" />
              {song.name}
            </div>
            <p className='artistname'>{song.artist}</p>
            <button onClick={() => toggleLikeSong(song._id)}>
              ❤️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedSongs;
