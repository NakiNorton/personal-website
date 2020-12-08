import React from 'react'
import './LandingPage.css'
import TextButtonFeature from '../TextButtonFeature/TextButtonFeature'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <TextButtonFeature />
        <h1 className='app-heading'>I'm Stephanie Norton,</h1>
        <h2 className='sub-heading'>a Software Engineer.</h2>
      <section className='contact-icons'>
        <p className='icon-text'>
          <a className='linkedIn icon-labels' href='https://www.linkedin.com/in/stephanie-norton-12888453/'><LinkedInIcon className='icon' />  LinkedIn</a>
          <a href='https://github.com/NakiNorton' className='icon-labels'><GitHubIcon className='icon' /> GitHub</a>
        </p>
      </section>
    </div>
  )
}

export default LandingPage