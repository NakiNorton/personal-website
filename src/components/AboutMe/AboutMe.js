import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import linkedIn from '../../assets/linkedIn.jpg'



const AboutMe = () => {
  return (
    <div className='about'>
      <div className='section-about u-margin-bottom-medium'>
        <div className="avatar-container">
          <Avatar id="avatar" src={linkedIn} alt="LinkedIn profile photo" />
        </div>

        <div className="about__textbox">
          <h2 className='about__heading heading-secondary'>About</h2>
          <p className="paragraph u-margin-top-medium">I'm an empathetic software developer with a wealth of experience working both collaboratively and independently to deliver quality results. I love problem solving, variety in my work, and user-centric design.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small" style={{ textAlign: 'center'}}>Key Skills</h3>
            <ul className='about__skill-list'>
              <li className='pill'>React</li>
              <li className='pill'>Javascript ES5/ES6</li>
              <li className='pill'>API</li>
              <li className='pill'>Git/GitHub Workflow</li>
              <li className='pill'>HTML5</li>
              <li className='pill'>Agile</li>
              <li className='pill'>UI/UX</li>
              <li className='pill'>CSS3</li>
              <li className='pill'>SASS/SCSS</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutMe