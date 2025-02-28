import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style/Songs.css'
const Songs = ({image,name,id}) => {
  const navig=useNavigate();
  return (
    // <div><div className='songs' onClick={()=>navig('/disalb/${id}')}>
    <div className='songs'>
    <div className='box'>
      <img src={image} alt=""/>
     
     
      <p className='sname'>{name}</p>
  </div>
   </div>
  )
}

export default Songs