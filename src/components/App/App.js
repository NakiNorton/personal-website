import React from 'react';
import Header from '../Header/Header'
import LandingPage from '../LandingPage/LandingPage'
import Portfolio from '../Portfolio/Portfolio'
import AboutMe from '../AboutMe/AboutMe'
import Contact from '../Contact/Contact'
import './App.css';

function App() {
  return (
    <main className="App">
      <Header/>
      <LandingPage id="landing-page"/>
      <AboutMe id="about-me" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
      <footer />
    </main>
  );
}

export default App;
