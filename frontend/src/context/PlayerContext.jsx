import { createContext, useEffect, useRef, useState } from "react";
import {  assets, mfu } from "../assets/assets";

export const PlayerContext=createContext();

const PlayerContextProv=(props)=>{
    const audioRef=useRef();
    const seek=useRef();
    const seekBar=useRef();

    const [track,setTrack]=useState(mfu[0] ||{
        name:"unknown",
        artist:"unknown",
        image:"",
        file:""
    }

    );
    const [playStatus,setPlayStatus]=useState(false);
    const [time,setTime]=useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })
    const play = () => {
        if (audioRef.current && track.file) {
            audioRef.current.src = track.file; 
            audioRef.current.play()
                .then(() => setPlayStatus(true))
                .catch(err => console.error("Playback failed:", err));
        } else {
            console.error("Audio reference is null or file is missing", track);
        }
    };
    
    const pause=()=>{
        audioRef.current.pause();
        setPlayStatus(false); 
     }
     const playWithId = async (id) => {
        if (!audioRef.current) {
            console.error("Audio reference is null");
            return;
        }
    
        const newTrack = mfu.find(item => item.id === id);
        
        if (newTrack && newTrack.file) {
            await setTrack(newTrack);
            audioRef.current.src = newTrack.file; 
            audioRef.current.play()
                .then(() => setPlayStatus(true))
                .catch(err => console.error("Playback failed:", err));
        } else {
            console.error("Track file is missing for ID:", id);
        }
    };
    
     useEffect(()=>{
        setTimeout(()=>{
    audioRef.current.ontimeupdate=()=>{
        seekBar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
        setTime({
            currentTime:{
                second:Math.floor(audioRef.current.currentTime%60),
                minute:Math.floor(audioRef.current.currentTime/60)
            },
            totalTime:{
                second:Math.floor(audioRef.current.currentTime%60),
                minute:Math.floor(audioRef.current.currentTime/60)
           
            }
        
    })
    }
        },1000);
     })
    
    const contextValue={
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
        playWithId
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProv;