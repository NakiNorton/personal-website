import React from 'react'
import './LandingPage.css'
import ButtonOne from '../Button/ButtonOne'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from "react-router-dom";
// import kiwi from '../assets/kiwi.png'
// import { Typography } from '@material-ui/core'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <ButtonOne />
        <h1 className='app-heading'>I'm Stephanie Norton,</h1>
        <h2 className='sub-heading'>a Software Engineer.</h2>
      {/* <img src={kiwi} alt="Kiwi Bird Drawing 40 Clipart - Nz Kiwi Bird Outline @clipartmax.com"/> */}
      <section className='contact-icons'>
        <p>
          <a className='linkedIn icon-labels' href='https://www.linkedin.com/in/stephanie-norton-12888453/'><LinkedInIcon className='icon' fontSize= 'medium' />  LinkedIn</a>
          <a href='https://github.com/NakiNorton' className='icon-labels'><GitHubIcon className='icon' cfontSize='medium' />   GitHub</a>
        </p>
      </section>
      
    </div>
  )
}

export default LandingPage