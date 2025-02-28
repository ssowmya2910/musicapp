import React from 'react'
import Navbar from './Navbar.jsx'
import { useParams } from 'react-router-dom'
import {  mfu } from '../assets/assets.js';
const DisSong = () => {
    const {id}=useParams();
    const songData=mfu[id];
    console.log(songData);
  return (
    <div><Navbar/>
    <div className='disSongdiv1'>
        <img className='songimg' src={songData.image} alt=" "/> 
        </div></div>
  )
}

export default DisSong