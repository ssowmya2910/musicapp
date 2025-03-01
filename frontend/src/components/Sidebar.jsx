import React from 'react'
import './style/Sidebar.css'
import {assets} from '../assets/assets.js'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img className="logo" src={assets.name} alt=" "/>
      <div className='side'>
      <Link to='/home'>
      <div className='inside'>
      <img src={assets.home} alt="home"/>
       home
        </div></Link>
        <div className='inside'>
        <img src={assets.clock} alt="recents"/>
        <p>recents</p> 
          
        </div>
      
        
        
      </div>

    </div>
  )
}

export default Sidebar