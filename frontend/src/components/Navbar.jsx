import React from 'react'
import {assets} from '../assets/assets.js'
import { Link } from 'react-router-dom'
import './style/Navbar.css'
const Navbar = () => {
  return (
    <div className='navv'>
        <div className='navv2' >
            <img className='navbar' src={assets.left} alt=" "/>
            <img className='navbar' src={assets.right} alt=" "/>
        </div>
       {/* <div className='signup'>
       <Link to='/signup' className='signlink'><button >Signup</button></Link> 
       </div> */}
    </div>
  )
}

export default Navbar