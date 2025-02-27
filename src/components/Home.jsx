import React from 'react'
import Navbar from './Navbar'
import { album } from '../assets/assets'
import { album1 } from '../assets/assets'
import { mfu } from '../assets/assets'
import Album from './Album'
import './style/Home.css'
const Home = () => {
  return (
   <>
   <Navbar/>
   <div className='homesongs'>
    <h1>Feature Songs</h1>
    <div className='aldis'>
    {album.map((items,index)=>(
      <Album key={index} name={items.name} image={items.image}/>
    ))}
     <div className='aldis'>
    {album1.map((items,index)=>(
      <Album key={index} name={items.name} image={items.image}/>
    ))}

   </div>
   

   </div>
   </div>
   <div className='homesongs'>
    <h1>Made for you</h1>
   <div className='aldis2'>
    {mfu.map((items,index)=>(
      <Album key={index} name={items.name} image={items.image}/>
    ))}
     </div>
   </div>
   </>
  )
}

export default Home