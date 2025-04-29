import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import DisplaySong from './DisplaySong';
import { PlayerContext } from '../context/PlayerContext';

const RecentlyPlayed = () => {
  const { userId, playWithId } = useContext(PlayerContext);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await axios.get(`https://isaiwreathe.onrender.com/api/auth/recently-played/${userId}`);
        setSongs(res.data);
      } catch (err) {
        console.error("Error fetching recently played", err);
      }
    };

    fetchRecent();
  }, [userId]);

  return (
    <div>
      <Navbar />
      <DisplaySong />
      <h2> Recently Played</h2>
      <div className="albumSongs">
        {songs.map((song, index) => (
          <div className='disalb1' key={song._id}>
            <div className='songplay' onClick={() => playWithId(song._id, false)}>
              <b>{index + 1}</b>
              <img className='songimg' src={song.image} alt="" />
              {song.name}
            </div>
            <p className='artistname'>{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyPlayed;
