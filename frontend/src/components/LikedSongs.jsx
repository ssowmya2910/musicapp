import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const LikedSongs = () => {
  const { likedSongs, playWithId } = useContext(PlayerContext);

  return (
    <div className="songListPage">
      <h2>Liked Songs</h2>
      {likedSongs.length === 0 ? (
        <p>No liked songs yet.</p>
      ) : (
        likedSongs.map((song, index) => (
          <div key={song._id} onClick={() => playWithId(song._id)}>
            <p>{index + 1}. {song.name} - {song.artist}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default LikedSongs;
