import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './style/Frontpage.css'
import Home from './Home'
import Signup from './Signup'
import DisAlb from './DisAlb'
import DisSong from './DisSong'
const Frontpage = () => {
  return (
    <div className='frontpg'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/disalb/:id' element={<DisAlb/>}/>
        <Route path='/dissong/:id' element={<DisSong/>}/>

      </Routes>
    </div>
  )
}

export default Frontpage