import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Red from './Red';
import Blue from './Blue';
import Home from './Home';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white'); // Default color

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <body  style={{ backgroundColor }}>
    <div id="main-section">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <ul>
        <li><Link to="/blue" className="blue" onClick={() => 
            handleColorChange('#275db3')}>Blue</Link></li>
          <li><Link to="/red" className="red" onClick={() => 
           handleColorChange('#b05f6d')}>Red</Link></li>
          <li><Link to="/" className="Home" onClick={() => 
           handleColorChange('#ffffff')}>Home</Link></li>
        </ul>
      </div>

      <div id="main-content">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </div>
    </body>
  );
}

export default App;