import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './editsong.css';

const EditSong = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/songs/${id}`)
      .then(res => {
        setTitle(res.song.title);
        setArtist(res.song.artist);
        setAlbum(res.song.album);
        setGenre(res.song.genre);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedSong = {
      title,
      artist,
      album,
      genre
    };
    axios.put(`http://localhost:5000/songs/${id}`, updatedSong)
      .then(res => {
        console.log(res.song);
        window.location = `/songs`;
      })
      .catch(err => console.log(err));
  };
  
  return (
    <div className="edit-song-box">
      <h2>Edit Song</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            className="form-control"
            id="artist"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="album">Album:</label>
          <input
            type="text"
            className="form-control"
            id="album"
            value={album}
            onChange={(event) => setAlbum(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            className="form-control"
            id="genre"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update Song</button>
      </form>
    </div>
  );
};

export default EditSong;

