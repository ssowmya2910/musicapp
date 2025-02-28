import React from 'react'
import './style/Album.css'
import { useNavigate } from 'react-router-dom'
const Album = ({image,name,id}) => {
  const navig=useNavigate()
  return (
    <div className='albums' onClick={()=>navig('/disalb/{id}')}>
      <div className='box'>
        <img src={image} alt=""/>
       
        </div>
        <p className='sname'>{name}</p>
    </div>
  )
}

export default Album