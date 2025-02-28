import React from 'react'
import './style/DisplaySong.css'
import {newarr, assets} from '../assets/assets.js'
const DisplaySong = () => {
  return (
    <div className='div1'>
        <div className='play'>
        <img className='img1' src={newarr[0].image} alt=""/>
        <div className='dissong' >
          <p>{newarr[0].name}</p>
          <p>{newarr[0].artist}</p>
         
          {/* <p>{album[3].duration}</p> */}

        </div>
        <div className='col'>
          <img src={assets.left} alt=""/>
          <img src={assets.play} alt=""/>
          <img src={assets.right} alt=""/>
 
        </div>
        <div className='playsong'>
    <p>2:08</p>
    <div className='so1'>
      <hr className='playline' />
    </div>
    <p>3:23</p>
        </div>
        </div>
        <div className='hid'>
          {/* have to design hideitems */}
        </div>
    </div>
  )
}

export default DisplaySong