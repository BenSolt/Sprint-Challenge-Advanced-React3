import React from 'react';
import logo from './logo.svg';
import './App.css';
import './navbar.css'

import PlayerCard from './components/PlayerCard';
import NavbarDarkM from './components/NavbarDarkM'

function App() {
  return (
    <div className="App">
      <div className="Slider">
        <NavbarDarkM/>  
      </div>
      <h1>Womans World Cup</h1>
      <PlayerCard/>
    </div>
  );
}

export default App;
