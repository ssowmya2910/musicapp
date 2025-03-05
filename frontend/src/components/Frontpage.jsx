import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './style/Frontpage.css'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import DisAlb from './DisAlb'
import Sidebar from './Sidebar'
const Frontpage = () => {
  return (
    <div className='frontpg'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Signup/>}/>
        
        <Route path='/disalb/:id' element={<DisAlb/>}/>
        
      </Routes>
    </div>
  )
}

export default Frontpage