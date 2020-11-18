import React from 'react'
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <header className="App-header">
      <ul className='header-links'>
        <li className='nav-link'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='nav-link'>
          <NavLink to='/about-me'>About Me</NavLink>
        </li>
        <li className='nav-link'>
          <NavLink to='/portfolio'>Portfolio</NavLink>
        </li>
        <li className='nav-link'>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header