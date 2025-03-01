import React from 'react'
import './style/Songs.css'
const Songs = ({image,name,id}) => {
  return (
    <div className='songs'>
    <div className='box'>
      <img src={image} alt=""/>
     
     
      <p className='sname'>{name}</p>
  </div>
   </div>
   
  )
}

export default Songs