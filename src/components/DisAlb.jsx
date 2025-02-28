import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { album } from '../assets/assets';
const DisAlb = () => {
    const {id}=useParams();
    const albumData=album[id];
    console.log(albumData);
  return (
    <div><Navbar/>
    <div className='disdiv1'>
        <img className='albimg' src={albumData.image} alt=" "/> 
        </div></div>
  )
}

export default DisAlb