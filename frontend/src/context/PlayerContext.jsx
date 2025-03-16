import { createContext, useEffect, useRef, useState } from "react";
import { disalb1 } from "../assets/assets";

export const PlayerContext=createContext();

const PlayerContextProv=(props)=>{
    const audioRef=useRef();
    const seek=useRef();
    const seekBar=useRef();

    const [track,setTrack]=useState(disalb1[0]);
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
    const play=()=>{
       audioRef.current.play();
       setPlayStatus(true); 
    }
    const pause=()=>{
        audioRef.current.pause();
        setPlayStatus(false); 
     }
     const playWithId=async(id)=>{
        await setTrack(disalb1[id]);
        await audioRef.current.play();
        setPlayStatus(true);

     }
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
            <audio ref={audioRef} src={track.src}></audio>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProv;