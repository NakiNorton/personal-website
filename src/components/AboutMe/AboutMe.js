import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import profileImg from '../../assets/profile_img_side_lg.jpg'
import resume from '../../assets/StephanieNortonResume.pdf'



const AboutMe = () => {
  return (
    <div className='about'>
      <div id="avatar-mobile-container">
        <Avatar id="avatar-mobile-only" src={profileImg} alt="photo of Stephanie" />
      </div>
      <div className='section-about u-margin-bottom-medium'>
        <div className="avatar-container">
          <Avatar id="avatar" src={profileImg} alt="photo of Stephanie" />
        </div>
        <div className="about__textbox">
          <h2 className='about__heading heading-secondary'>About</h2>
          <p className="paragraph u-margin-top-medium">
            Hi! I’m Stephanie Norton, a software engineer based in Denver, CO. My decision to transition to a career in software engineering was driven by the fulfillment and engagement I feel when tackling complex problems and transforming ideas into working features. I love that tech is continuously evolving and that there are endless opportunities to learn, grow, and to use my skills to make a positive impact.<br />

            <br />After graduating from Turing School of Software and Design in November 2020 I joined an early stage startup on a contract basis. Joining one month prior to product launch, I dove into the code base to iterate and improve on existing features and built major new features that contributed to it being awarded #1 on Product Hunt.<br />

            <br />I’ve been working primarily in the React.JS ecosystem which I really enjoy,  but I’m always interested in adding more tools to my toolbelt. I have proven experience working both collaboratively and independently to deliver quality results. I'd love to chat if you have a full-time opportunity that you think I could be a good fit for!<br />
          </p>
          <a className='resume' href={resume} target="_blank" rel="noreferrer">Check out my resume
            <OpenInNewIcon />
          </a> 
          <h3 className="heading-tertiary u-margin-bottom-small u-margin-top-medium" style={{ textAlign: 'center'}}>Key skills</h3>
            <ul className='about__skill-list'>
              <li className='pill'>React.JS</li>
              <li className='pill'>Javascript ES5/ES6</li>
              <li className='pill'>API</li>
              <li className='pill'>Git/GitHub Workflow</li>
              <li className='pill'>HTML5</li>
              <li className='pill'>Agile practices</li>
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