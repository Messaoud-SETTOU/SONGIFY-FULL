import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <Link to="/">
      <a className="navbar-brand" href="#">My Playlist</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <Link to="/songs/add" className="btn btn-warning  mb-0" >Add Song</Link>
       
        </ul>
      </div>
      </Link>
    </nav>
  );
};

export default Navbar;
