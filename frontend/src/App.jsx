import React from 'react'
import Sidebar from './components/Sidebar'
import DisplaySong from './components/DisplaySong'
import Frontpage from './components/Frontpage'
import Login from './components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
const App = () => {
  return (
    <div className='app1'>
    
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Signup/>}/> 
       <Route path='/login' element={<Login/>}/> 
       <Route path='/signup' element={<Signup/>}/> 

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App