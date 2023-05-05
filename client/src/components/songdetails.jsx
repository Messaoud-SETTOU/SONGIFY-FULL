import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

const SongDetails = () => {
  const [song, setSong] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/songs/${id}`)
      .then(res => {
        setSong(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5000/songs/delete/${song.title}`)
      .then(res => {
        console.log(res.data);
        window.location = '/';
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="card mt-5" style={{ width: '30rem' }}>
        <div className="card-body">
          <h2 className="card-title"> Title : {song.title}</h2>
          <h4 className="card-text">By : {song.artist}</h4>
          <h4 className="card-text"> Album release : {song.album}</h4>
          <h4 className="card-text"> Genre : {song.genre}</h4>
          <h4 className="card-text">Duration : {song.duration}</h4>
          <button onClick={handleDelete} className="btn btn-danger m-2 mr-3">Delete Song</button>
          <Link to={`/songs/${id}/update`} className="btn btn-primary m-2 ml-3">Edit</Link>
          <Link to="/" className="btn btn-secondary m-2">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
