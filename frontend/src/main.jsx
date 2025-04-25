import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import PlayerContextProv from './context/PlayerContext.jsx'
import UserProvider from './context/UserContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <PlayerContextProv>
    <App />
    </PlayerContextProv>
    </UserProvider>
    
    
   
  </StrictMode>,
)
