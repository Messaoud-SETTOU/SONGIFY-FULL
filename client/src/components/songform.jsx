import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

const SongForm = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/songs/', { title, artist, album, genre })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  return (
    <div className="container">
      <h1 className="badge btn-lg text-bg-dark mb-10 m-4" style={{ fontSize: '1.5em' }}>Add New Song</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Artist:</label>
          <input type="text" className="form-control" value={artist} onChange={e => setArtist(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Album:</label>
          <input type="text" className="form-control" value={album} onChange={e => setAlbum(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <input type="text" className="form-control" value={genre} onChange={e => setGenre(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Duration:</label>
          <input type="text" className="form-control" value={duration} onChange={e => setDuration(e.target.value)} />
        </div>
        
        <button type="submit" className="btn btn-info m-4">Add Song</button>
        <Link to="/" className="btn btn-secondary m-2">Back</Link>
      </form>
    </div>
  );
};

export default SongForm;
