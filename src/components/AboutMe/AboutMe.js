import React, { useState } from 'react'
// import Paper from '@material-ui/core/Paper'
import { data } from '../../data'
import kiwi from '../../assets/kiwi.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import './AboutMe.css'


const AboutMe = () => {
  const [skills, setSkills] = useState(false);
  const [story, setStory] = useState(false);

  const showSkills = () => {
    !skills ? setSkills(true) : setSkills(false)
  }

  const showStory = () => {
    !story ? setStory(true) : setStory(false)
  }

  return (
    <div className='about'>
      <section className='section-about'>
        <article className="about__textbox">
          <h2 className='about__heading heading-secondary '>About Me 
            <span>
              <img className='about__kiwi-img' src={kiwi} alt='kiwi bird' />
            </span>
          </h2>

      
              <p className="paragraph" style={{ fontStyle: 'italic'}}>{data.aboutMeSection0}
              </p>
              <p className="paragraph">{data.aboutMeSection1}</p>
    
            <button className="expand-btn" onClick={() => showSkills()}>Key Skills<span><ExpandMoreIcon fontSize='medium'></ExpandMoreIcon></span></button>
          {skills &&
            <>
              <ul className='about__skill-list paragraph'>
                <li>ReactJS, React Router, Hooks</li>
                <li>Javascript ES5/ES6</li>
                <li>API</li>
                <li>Redux</li>
                <li>HTML/CSS</li>
                <li>SASS/SCSS</li>
                <li>Testing: Mocha/Chai, Jest, React Testing Library</li>
              </ul>
            </>
          }
          <button className="expand-btn" onClick={() => showStory()}>My Story<span><ExpandMoreIcon fontSize='medium'></ExpandMoreIcon></span></button>
          {story &&
            <>
              <p className="paragraph">{data.aboutMeSection3}</p>
            </>
          }
        </article>
        <div class="composition">
          <img className='composition__photo composition__photo--p1' src={data.photos[0]} alt='linkedInprofile'/>
          <img className='composition__photo composition__photo--p2' src={data.photos[1]} alt='Hiking in Colorado' />
          <img className='composition__photo composition__photo--p3' src={data.photos[2]} alt='With my foster dog' />
        </div>
      </section>
    </div>
  )
}

export default AboutMe