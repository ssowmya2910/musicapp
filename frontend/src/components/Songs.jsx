import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style/Songs.css'
const Songs = ({image,name,id}) => {
  const navig=useNavigate();
  return (
   
    <div className='songs'onClick={()=>navig(`/dissong/${id}`)}>
    <div className='box'>
      <img src={image} alt=""/>
     
     
      <p className='sname'>{name}</p>
  </div>
   </div>
   
  )
}

export default Songs