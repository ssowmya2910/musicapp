import React from 'react'
import './style/Album.css'
const Album = ({image,name}) => {
  return (
    <div className='albums'>
        <img src={image} alt=""/>
        <p className='sname'>{name}</p>
    </div>
  )
}

export default Album