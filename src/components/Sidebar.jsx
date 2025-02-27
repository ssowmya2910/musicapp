import React from 'react'
import './style/Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='side'>
      <div className='inside'>
         <img src="./src/assets/home.png" alt="home"/>
         <p>home </p> 
          
        </div>
        <div className='inside'>
        <img src="./src/assets/clock.png" alt="recents"/>
        <p>recents</p> 
          
        </div>
      
        <div className='inside'>
         <img src="./src/assets/mic.png" alt="artist"/>
         <p>artists </p> 
          
        </div>
        <div className='inside'>
         <img src="./src/assets/shuffle.png" alt="recommend"/>
         <p>for you </p> 
          
        </div>
        <div className='inside'>
         <img src="./src/assets/add.png" alt="songs"/>
         <p>playlist </p> 
          
        </div>
        <div className='inside'>
         <img src="./src/assets/fav.png" alt="fav"/>
         <p>Favourites </p> 
          
        </div>
      </div>

    </div>
  )
}

export default Sidebar