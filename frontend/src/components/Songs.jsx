import React, { useContext } from 'react'
import './style/Songs.css'
import { PlayerContext } from '../context/PlayerContext'
const Songs = ({image,name,id}) => {
  const {playWithId}=useContext(PlayerContext)
  return (
    <div onClick={()=>playWithId(id)} className='songs'>
    <div className='box'>
      <img src={image} alt=""/>
      <p className='sname'>{name}</p>
  </div>
   </div>
   
  )
}

export default Songs