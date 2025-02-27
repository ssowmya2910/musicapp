import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './style/Frontpage.css'
import Home from './Home'
import Signup from './Signup'
const Frontpage = () => {
  return (
    <div className='frontpg'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
      </Routes>
    </div>
  )
}

export default Frontpage