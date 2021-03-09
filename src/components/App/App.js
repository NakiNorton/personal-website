import React from 'react';
import NavBar from '../Navigation/NavBar';
import LandingPage from '../LandingPage/LandingPage'
import Portfolio from '../Portfolio/Portfolio'
import AboutMe from '../AboutMe/AboutMe'
import Contact from '../Contact/Contact'
import '../../sass/main.scss';


const App = () => {
  return (
    <main className="app">
      <NavBar />
      <LandingPage id="header" />
      <AboutMe id="about" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </main>
  );
}

export default App;
