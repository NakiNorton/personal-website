import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = ({ isLoading }) => {
  return (
    <div className="header u-margin-top-medium">
      <div className="header__text-box">
        { isLoading &&
          <h1 style={{ color: 'lightgrey' }}>Loading . . .</h1>
        }
        { !isLoading &&
        <>
          <h1 className="heading-primary">
            <span className="heading-primary--main">Stephanie Norton</span>
            <span className="heading-primary--sub"> Frontend Software Engineer.</span>
          </h1>
          <div className='header__contact-icons'>
            <a className='icon' href='https://www.linkedin.com/in/stephanie-norton-12888453/'><LinkedInIcon fontSize='inherit' /></a>
            <a href='https://github.com/NakiNorton' className='icon'><GitHubIcon fontSize='inherit'/></a>
          </div>
          </>
        }
      </div>
    </div>
  )
}

export default Header;