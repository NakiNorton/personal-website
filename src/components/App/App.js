import React from 'react';
import { Route } from "react-router-dom";
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
      <Route exact path='/' render={() =>  
      <LandingPage />
      } />
      <Route exact path='/portfolio' render={() =>
        <Portfolio />
      } />
      <Route exact path='/about-me' render={() =>
        <AboutMe />
      } />
      <Route exact path='/contact' render={() =>
        <Contact />
      } />
    </main>
  );
}

export default App;
