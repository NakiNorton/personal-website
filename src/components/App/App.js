import React from 'react';
import ButtonAppBar from '../Navigation/ButtonAppBar';
import Header from '../Header/Header'
import Portfolio from '../Portfolio/Portfolio'
import AboutMe from '../AboutMe/AboutMe'
import Contact from '../Contact/Contact'
import './App.css';
import '../../sass/main.scss';

function App() {
  return (
    <main className="app">
      <ButtonAppBar />
      <Header id="header"/>
      <AboutMe id="about-me" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </main>
  );
}

export default App;
