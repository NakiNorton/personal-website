import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import linkedIn from '../../assets/linkedIn.jpg'
import resume from '../../assets/StephanieNortonResume.pdf'



const AboutMe = () => {
  return (
    <div className='about'>
      <div className='section-about u-margin-bottom-medium'>
        <div className="avatar-container">
          <Avatar id="avatar" src={linkedIn} alt="LinkedIn profile photo" />
        </div>

        <div className="about__textbox">
          <h2 className='about__heading heading-secondary'>About</h2>
          <p className="paragraph u-margin-top-medium">Hi! I’m Stephanie Norton, a frontend software engineer based in Denver, CO. I love transforming ideas into working features and I'm continously honing my skills. I've been working predominantly with React & I enjoy the design aspect of front-end development but I’m also interested in expanding my knowledge and experience in back-end tech & branching into mobile app development. <br />
          <br />After graduating from Turing School of Software & Design in November 2020 I joined an early stage startup on a contract basis. Joining one month prior to product launch, I dove into the code base to iterate & improve on existing features & built major new features that contributed to it being number one on Product Hunt.<br /><br />I have proven experience working both collaboratively and independently to deliver quality results. I'd love to chat if you have a full-time opportunity that you think I could be a good fit for!
          </p>
          <a className='resume' href={resume} target="_blank" rel="noreferrer">View Resume</a>
          <h3 className="heading-tertiary u-margin-bottom-small" style={{ textAlign: 'center'}}>Key skills</h3>
            <ul className='about__skill-list'>
              <li className='pill'>ReactJS</li>
              <li className='pill'>Javascript ES6</li>
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