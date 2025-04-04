import React from 'react'
import Navbar from './Navbar'
import { album , disparr} from '../assets/assets'
import Album from './Album'
import Songs from './Songs'
import './style/Home.css'
import Sidebar from './Sidebar'
import DisplaySong from './DisplaySong'
const Home = () => {
  return (
   <>
   <Sidebar/>
   <Navbar/>
   <DisplaySong/>
   <div className='homesongs'>
    <h1>Featured Songs</h1>
    <div className='aldis'>
    {album.map((items,index)=>(
      <Album key={index} name={items.name} image={items.image} id={items.id}/>
    ))}
   </div>
   </div>
   <div className='homesongs'>
    <h1>Made for you</h1>
   <div className='aldis'>
    {disparr.map((items,index)=>(
      <Songs key={index} name={items.name} image={items.image} id={items.id}/>
    ))}
     </div>
    
   </div>
   
   </>
  )
}

export default Home