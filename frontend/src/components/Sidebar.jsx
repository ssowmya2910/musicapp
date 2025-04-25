import React from 'react'
import './style/Sidebar.css'
import {assets} from '../assets/assets.js'
import { Link, useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate=useNavigate();
  return (
    <div className='sidebar'>
      <img className="logo" src={assets.name} alt=" "/>
      <div className='side'>
      <Link to='/home'>
      <div className='inside'>
      <img src={assets.home} alt="home"/>
       home
        </div></Link>
       <Link to='/liked'><div className='inside'>
        <img src={assets.fav} alt="like"/>
        <p>liked songs</p> 
          
        </div></Link> 
        
      </div>
      <div className='sideBar2'>
        <Link to='/recently-played'>
        <div className='inside'>
            <img src={assets.stack}/>
            <p>recently played</p>
          </div>
          </Link>

       
      </div>

    </div>
  )
}

export default Sidebar