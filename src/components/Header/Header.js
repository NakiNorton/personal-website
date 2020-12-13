import React from 'react'
import { Link } from "react-scroll";
import './Header.css'

const Header = () => {
  return (
    <header className="App-header">
      <ul className='header-links'>
        <li className='nav-link'>
          <Link to='landing-page'>Home</Link>
        </li>
        <li className='nav-link'>
          <Link to='about-me'>About Me</Link>
        </li>
        <li className='nav-link'>
          <Link to='portfolio'>Portfolio</Link>
        </li>
        <li className='nav-link'>
          <Link to='contact'>Contact</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header