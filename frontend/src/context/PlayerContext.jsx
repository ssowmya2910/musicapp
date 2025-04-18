import { createContext, useEffect, useRef, useState } from "react";

export const PlayerContext = createContext();

const PlayerContextProv = (props) => {
  const audioRef = useRef();
  const seek = useRef();
  const seekBar = useRef();

  const [allSongs, setAllSongs] = useState([]); // fetched from MongoDB
  const [trackIndex, setTrackIndex] = useState(null);
  const [track, setTrack] = useState({});
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    try {
      const res = await fetch(`https://isaiwreathe.onrender.com/api/songs/${id}`);
      const newTrack = await res.json();
  
      setTrack(newTrack);
      const index = allSongs.findIndex(song => song._id === newTrack._id);
      setTrackIndex(index);
  
      if (audioRef.current) {
        audioRef.current.src = newTrack.file;
        audioRef.current.onloadeddata = async () => {
          try {
            await audioRef.current.play();
            setPlayStatus(true);
          } catch (err) {
            console.error("Playback failed:", err);
          }
        };
      }
    } catch (err) {
      console.error("Error playing song:", err);
    }
  };

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

  useEffect(() => {
    const fetchAllSongs = async () => {
      const res = await fetch("https://isaiwreathe.onrender.com/api/songs");
      const data = await res.json();
      setAllSongs(data);
    };
  
    fetchAllSongs();
  }, []);
  

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = () => {
          seekBar.current.style.width =
            Math.floor((audioRef.current.currentTime / audioRef.current.duration) * 100) + "%";

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
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProv;
