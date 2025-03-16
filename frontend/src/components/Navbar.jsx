import React from 'react'
import {assets} from '../assets/assets.js'
import './style/Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className='navv'>     
        <div className='navv2' >
            <img className='navbar' onClick={()=>navigate(-1)} src={assets.left} alt=" "/>
            <img className='navbar' onClick={()=>navigate(1)} src={assets.right} alt=" "/>
        </div>
       {/* <div className='signup'>
       <Link to='/signup' className='signlink'><button >Signup</button></Link> 
       </div> */}
    </div>
  )
}

export default Navbar