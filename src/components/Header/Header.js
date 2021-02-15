import React from 'react'
import './Header.css'
// import TextButtonFeature from '../TextButtonFeature/TextButtonFeature'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = () => {
  return (
      <div className="header">
        <div className="header__text-btn">
          {/* <TextButtonFeature /> */}
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">I'm Stephanie Norton,</span>
            <span className="heading-primary--sub"> Frontend Software Engineer.</span>
          </h1>
        </div>
        <div className='header__contact-icons'>
          <p className='icon-text'>
            <a className='linkedIn icon-labels' href='https://www.linkedin.com/in/stephanie-norton-12888453/'><LinkedInIcon className='icon' />  LinkedIn</a>
            <a href='https://github.com/NakiNorton' className='icon-labels'><GitHubIcon className='icon' /> GitHub</a>
          </p>
        </div>
        
    
      
      </div>
  )
}

export default Header;