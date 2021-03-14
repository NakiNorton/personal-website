import React from 'react'
import BurgerMenu from './../Navigation/BurgerMenu'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ResumeIcon from '@material-ui/icons/Description';
import resume from '../../assets/Stephanie_Norton_Resume.pdf'
import Tooltip from '@material-ui/core/Tooltip';


const LandingPage = () => {
  return (
    <div className='header u-margin-top-medium'>
      <div id='mobile'>
        <BurgerMenu />
      </div>
      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>Stephanie Norton</span>
          <span className='heading-primary--sub'>Front End Software Engineer</span>
        </h1>
        <div className='header__contact-icons'>
          <a className='icon' href='https://www.linkedin.com/in/stephanie-norton-12888453/' target="_blank" rel='noreferrer'>
            <LinkedInIcon fontSize='inherit' />
          </a>
          <a href='https://github.com/NakiNorton' className='icon' target="_blank" rel='noreferrer'>
            <GitHubIcon fontSize='inherit'/>
          </a>
          <Tooltip title='Resume'>
            <a href={resume} target="_blank" rel='noreferrer' className='icon'>
              <ResumeIcon fontSize='inherit' />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;