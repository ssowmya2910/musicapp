import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Frontpage from './components/Frontpage';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import DisAlb from './components/DisAlb';
import { PlayerContext } from './context/PlayerContext';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 const {audioRef,track}=useContext(PlayerContext);
  return (
    <>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    <div className='app1'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/signup' element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/disalb/:id' element={<DisAlb/>}/>
          <Route path='/home' element={<Home/>}/>
           
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
};

export default App;
