import React from 'react'
import Navbar from './Navbar.jsx'
import { useParams } from 'react-router-dom'
import { album } from '../assets/assets.js';
import './style/Display.css'
const DisAlb = ({}) => {
  const {id}=useParams();
  const albumData=album[id];
  console.log(albumData);

    return (
      <div><Navbar/>
      <div className='disdiv1'>
          <img className='disp' src={albumData.image} alt=" "/> 
          <h2 className='albumname'>{albumData.name}</h2>
          </div>
          </div>
    )
}

export default DisAlb;
// import React, { useState } from 'react';
// import Navbar from './Navbar.jsx';
// import { useParams } from 'react-router-dom';
// import { album } from '../assets/assets.js';
// import './style/Display.css';

// const DisAlb = () => {
//   const { id } = useParams();
//   const albumData = album[id];

//   const [previewUrl, setPreviewUrl] = useState(null); // Store song preview

//   return (
//     <div>
//       <Navbar />
//       <div className='disdiv1'>
//         <img className='disp' src={albumData.image} alt={albumData.name} />
//         <h2 className='albumname'>{albumData.name}</h2>
//       </div>

//       <div className='songs-list'>
//         <h3>Songs</h3>
//         <ul>
//           {albumData.songs.map((song) => (
//             <li key={song.id} onClick={() => setPreviewUrl(song.preview)}>
//               🎵 {song.title}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Audio Player */}
//       {previewUrl && (
//         <div className='audio-player'>
//           <audio controls autoPlay>
//             <source src={previewUrl} type="audio/mpeg" />
//             Your browser does not support the audio tag.
//           </audio>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DisAlb;
