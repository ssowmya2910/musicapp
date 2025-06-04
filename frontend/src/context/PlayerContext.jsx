import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export const PlayerContext = createContext();

const PlayerContextProv = (props) => {
  const audioRef = useRef();
  const seek = useRef();
  const seekBar = useRef();
  const { userId, likedSongs, setLikedSongs, recentlyPlayed, setRecentlyPlayed } = useContext(UserContext);
 

  const [allSongs, setAllSongs] = useState([]);
  const [trackIndex, setTrackIndex] = useState(null);
  const [track, setTrack] = useState({});
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = () => {
    if (audioRef.current && audioRef.current.readyState >= 2) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };
  

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    if (!userId) return console.error("User ID missing");
    try {
     const token = localStorage.getItem("token");
await axios.post(
  `https://isaiwreathe.onrender.com/api/songs/${id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
      const newTrack = await res.json();
      const index = allSongs.findIndex(song => song._id === id);
  
      setTrackIndex(index);
      setTrack(newTrack); // let useEffect handle loading and playing
  
      await axios.post(`https://isaiwreathe.onrender.com/api/user/play/${id}`, { userId });
      fetchRecentlyPlayed(userId);
    } catch (err) {
      console.error("Play failed", err);
    }
  };
  useEffect(() => {
    if (track && track.file && audioRef.current) {
      audioRef.current.src = track.file;
      audioRef.current.load(); // ensure browser reloads audio
      audioRef.current.play().then(() => {
        setPlayStatus(true);
      }).catch((err) => {
        console.log("Autoplay failed", err);
      });
    }
  }, [track]);
    

  const prev = () => {
    if (trackIndex > 0) {
      const newIndex = trackIndex - 1;
      setTrackIndex(newIndex);
      playWithId(allSongs[newIndex]._id);
    }
  };

  const next = () => {
    if (trackIndex < allSongs.length - 1) {
      const newIndex = trackIndex + 1;
      setTrackIndex(newIndex);
      playWithId(allSongs[newIndex]._id);
    }
  };

  const seekSong = (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seek.current.offsetWidth) * audioRef.current.duration;
  };

  const toggleLikeSong = async (songId) => {
    if (!userId) return console.error("User ID missing");
    try {
      const token = localStorage.getItem("token");
await axios.post(
  `https://isaiwreathe.onrender.com/api/user/like/${songId}`,
  { userId },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
      fetchLikedSongs(userId);
    } catch (error) {
      console.error("Error liking song", error);
    }
  };

  const fetchLikedSongs = async (uId) => {
    try {
      const token = localStorage.getItem("token");
const res = await axios.get(
  `https://isaiwreathe.onrender.com/api/user/liked/${uId}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
      setLikedSongs(res.data);
    } catch (error) {
      console.error("Failed to fetch liked songs", error);
    }
  };

  const fetchRecentlyPlayed = async (uId) => {
    try {
     const token = localStorage.getItem("token");
const res = await axios.get(
  `https://isaiwreathe.onrender.com/api/user/recently-played/${uId}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);
      setRecentlyPlayed(res.data);
    } catch (error) {
      console.error("Failed to fetch recently played", error);
    }
  };
  

  useEffect(() => {
    const fetchAllSongs = async () => {
      const res = await fetch("https://isaiwreathe.onrender.com/api/songs");
      const data = await res.json();
      setAllSongs(data);
    };

    fetchAllSongs();
    if (userId) {
      fetchLikedSongs(userId);
      fetchRecentlyPlayed(userId);
    }
  }, [userId]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = () => {
          if (seekBar.current && audioRef.current.duration) {
            seekBar.current.style.width =
              Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%";
          }
          
          setTime({
            currentTime: {
              second: Math.floor(audioRef.current.currentTime % 60),
              minute: Math.floor(audioRef.current.currentTime / 60),
            },
            totalTime: {
              second: Math.floor(audioRef.current.duration % 60),
              minute: Math.floor(audioRef.current.duration / 60),
            },
          });
        };
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const contextValue = {
    audioRef,
    seek,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    prev,
    next,
    seekSong,
    allSongs,
    setAllSongs,
    trackIndex,
    setTrackIndex,
    toggleLikeSong,
    likedSongs,
    recentlyPlayed,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProv;
