import React from 'react'
import './style/DisplaySong.css'
import {album} from '../assets/assets.js'
const DisplaySong = () => {
  return (
    <div className='div1'>
        <div className='play'>
        <img className='img1' src={album[3].image} alt=""/>
        <div className='dissong' >
          <p>{album[3].name}</p>
          <p>{album[3].artist}</p>

          {/* <p>{album[3].duration}</p> */}

        </div>
        <div className='col'>

        </div>
        </div>
    </div>
  )
}

export default DisplaySong