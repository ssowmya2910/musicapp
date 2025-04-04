import { createContext, useEffect, useRef, useState } from "react";
import {  assets, disalb1 } from "../assets/assets";

export const PlayerContext=createContext();

const PlayerContextProv=(props)=>{
    const audioRef=useRef();
    const seek=useRef();
    const seekBar=useRef();

    const [track,setTrack]=useState(disalb1[6] ||{
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
        // if (audioRef.current && track.file) {
        //     audioRef.current.src = track.file; 
        //     audioRef.current.play()
        //         .then(() => setPlayStatus(true))
        //         .catch(err => console.error("Playback failed:", err));
        // } else {
        //     console.error("Audio reference is null or file is missing", track);
        // }
        audioRef.current.play();
        setPlayStatus(true); 

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
    
        const newTrack = disalb1.find(item => item.id === id);
        
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
    const prev=async()=>{
        if(track.id>0){
            await setTrack(disalb1[track.id-1]);
            await audioRef.curr.play();
            setPlayStatus(true);
        }
    }
    const next=async()=>{
        if(track.id<disalb1.length-1){
            await setTrack(disalb1[track.id+1]);
            await audioRef.curr.play();
            setPlayStatus(true);
        }
    }   
     const seekSong=async(e)=>{
         audioRef.current.currentTime=((e.nativeEvent.offsetX/seek.current.offsetWidth)*audioRef.current.duration)
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
                second:Math.floor(audioRef.current.duration%60),
                minute:Math.floor(audioRef.current.duration/60)
           
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
        playWithId,
        prev,
        next,
        seekSong
    }
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}
export default PlayerContextProv;