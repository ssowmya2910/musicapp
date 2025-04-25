import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const RecentlyPlayed = () => {
  const { recentlyPlayed, playWithId } = useContext(PlayerContext);

  return (
    <div className="songListPage">
      <h2>Recently Played</h2>
      {recentlyPlayed.length === 0 ? (
        <p>No songs played yet.</p>
      ) : (
        recentlyPlayed.map((song, index) => (
          <div key={song._id} onClick={() => playWithId(song._id)}>
            <p>{index + 1}. {song.name} - {song.artist}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecentlyPlayed;
