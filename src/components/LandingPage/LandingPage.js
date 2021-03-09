import React from 'react'
import BurgerMenu from './../Navigation/BurgerMenu'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ResumeIcon from '@material-ui/icons/Description';
import resume from '../../assets/StephanieNortonResume.pdf'

const LandingPage = () => {
  return (
    <div className="header u-margin-top-medium">
      <div id="mobile">
        <BurgerMenu />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Stephanie Norton</span>
          <span className="heading-primary--sub"> Frontend Software Engineer.</span>
        </h1>
        <div className='header__contact-icons'>
          <a className='icon' href='https://www.linkedin.com/in/stephanie-norton-12888453/'><LinkedInIcon fontSize='inherit' /></a>
          <a href='https://github.com/NakiNorton' className='icon'><GitHubIcon fontSize='inherit'/></a>
          <a href={resume} target="_blank" rel='noreferrer' className='icon'><ResumeIcon fontSize='inherit' /></a>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;