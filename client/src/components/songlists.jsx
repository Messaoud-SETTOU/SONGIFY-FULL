import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css"

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/songs')
      .then(res => {
        setSongs(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>

     

      <Link to="/songs/add" className="btn btn-warning  mb-0" >Add Song</Link>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {songs.map(song => (
          <div key={song._id} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{song.title}</h5>
                <p className="card-text">{song.artist}</p>
                <p className="card-text">{song.album}</p>
                <p className="card-text">{song.genre}</p>
                <Link to={`/songs/${song._id}`} className="btn btn-primary">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SongList;
