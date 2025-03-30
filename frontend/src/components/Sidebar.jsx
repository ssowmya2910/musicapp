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
        <div className='inside'>
        <img src={assets.search} alt="search"/>
        <p>search</p> 
          
        </div>
        
      </div>
      <div className='sideBar2'>
        <div>
        <div className='inside'>
            <img src={assets.stack}/>
            <p>your library</p>
          </div>

         
        </div>
      </div>

    </div>
  )
}

export default Sidebar