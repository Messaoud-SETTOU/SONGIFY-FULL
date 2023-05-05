import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SongList from "./components/songlists";
import SongForm from "./components/songform";
import SongDetails from "./components/songdetails";
import EditSong from "./components/editsong";
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar" style={{ backgroundColor: "#222", padding: "10px" }}>
        <div className="navbar-container">
          <h1 className="navbar-title" style={{ color: "white", fontSize: "40px" }}>My Playlist</h1>
        </div>
      </nav>
      <Routes>
        <Route path=" /" element={<SongList />} />
        <Route path="songs/add" element={<SongForm />} />
        <Route path="/songs/:id" element={<SongDetails />} />
        <Route path="/songs/:id/update" element={<EditSong />} />
      </Routes>
    </Router>
  );
}

export default App;
