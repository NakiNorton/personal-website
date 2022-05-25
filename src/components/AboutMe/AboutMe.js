import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import profileImg from '../../assets/profile_img_side_lg.jpg'
import resume from '../../assets/Stephanie_Norton_Resume.pdf'


const AboutMe = () => {
  return (
    <div className='about'>
      <div id='avatar-mobile-container'>
        <Avatar id='avatar-mobile-only' src={profileImg} alt='photo of Stephanie' />
      </div>
      <div className='section-about u-margin-bottom-medium'>
        <div className='avatar-container'>
          <Avatar id='avatar' src={profileImg} alt='photo of Stephanie' />
        </div>
        <div className='about__textbox'>
          <h2 className='about__heading heading-secondary'>About</h2>
          <p className='paragraph u-margin-top-medium'>
            Hi! I’m Stephanie Norton, a software engineer based in Denver, CO. My decision to pursue a career in software engineering was driven by the immense fulfillment and engagement that I'm rewarded with when tackling complex problems and transforming ideas into working features. I love that tech is continuously evolving and that there are endless opportunities for professional growth.<br />
          </p>
          <a className='resume' href={resume} target="_blank" rel="noreferrer">Check out my resume
            <OpenInNewIcon />
          </a> 
          <h3 className='heading-tertiary u-margin-bottom-small u-margin-top-medium' style={{ textAlign: 'center' }}>Skills</h3>
            <ul className='about__skill-list'>
              <li className='pill'>ReactJS</li>
              <li className='pill'>Javascript ES5/ES6</li>
              <li className='pill'>Ruby on Rails</li>
              <li className='pill'>Salesforce Development</li>
              <li className='pill'>API</li>
              <li className='pill'>Git/GitHub Workflow</li>
              <li className='pill'>Git/GitLab Workflow</li>
              <li className='pill'>HTML5</li>
              <li className='pill'>UI/UX</li>
              <li className='pill'>CSS3</li>
              <li className='pill'>GraphQL</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMe