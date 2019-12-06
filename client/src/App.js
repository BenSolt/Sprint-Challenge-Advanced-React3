import React from 'react';
import logo from './logo.svg';
import './App.css';
import './navbar.css'

import PlayerCard from './components/PlayerCard';
import NavbarDarkM from './components/NavbarDarkM'

function App() {
  return (
    <div className="App">
      <h1>Womans World Cup</h1>

      <div className="Slider">
        <NavbarDarkM/>  
      </div>


      <PlayerCard/>
    </div>
  );
}

export default App;
