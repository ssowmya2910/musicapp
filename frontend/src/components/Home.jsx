import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Album from './Album';
import './style/Home.css'; 
import Sidebar from './Sidebar';
const Home = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await axios.get("https://isaiwreathe.onrender.com/api/songs/albums");
        setAlbums(res.data);
      } catch (error) {
        console.error("Failed to fetch albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <>
    <Sidebar/>
    <div className="home">
     
      <div className="album-list">
        {albums.map(album => (
          <Album 
            key={album._id}
            id={album._id}
            name={album.name}
            image={album.image}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;
