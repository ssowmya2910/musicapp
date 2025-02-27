import React from 'react'
import './style/Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img className="logo" src="../Isai.png" alt=" "/>
      <div className='side'>
      <div className='inside'>
      <img src="./src/assets/home.png" alt="home"/>
        home
        </div>
        <div className='inside'>
        <img src="./src/assets/clock.png" alt="recents"/>
        <p>recents</p> 
          
        </div>
      
        
        
      </div>

    </div>
  )
}

export default Sidebar