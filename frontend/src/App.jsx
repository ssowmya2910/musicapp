import React from 'react'
import Sidebar from './components/Sidebar'
import DisplaySong from './components/DisplaySong'
import Frontpage from './components/Frontpage'
import './App.css'
const App = () => {
  return (
    <div className='app1'>
    <div className='app2'>
      <Sidebar/>
      <Frontpage/>
      </div>
      <DisplaySong/>
    </div>
  )
}

export default App