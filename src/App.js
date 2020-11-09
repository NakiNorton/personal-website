import React from 'react';
import ButtonOne from './ButtonOne'
import ButtonTwo from './ButtonTwo'
import Portfolio from './Portfolio/Portfolio'
import AboutMe from './AboutMe/AboutMe'
import Game from './TicTacToe/Game'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Stephanie Norton
        </p>
      </header>
      {/* functional component with hooks: */}
      <ButtonOne />
      {/* class component:  */}
      <ButtonTwo />
      <AboutMe />
      <Portfolio />
      <div>
       
        <Game />
      </div>
    </div>
  );
}

export default App;
