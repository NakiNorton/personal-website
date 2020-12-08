import React from 'react'
// import Paper from '@material-ui/core/Paper'
import { data } from '../../data'
import kiwi from '../../assets/kiwi.png'
import './AboutMe.css'


const AboutMe = () => {
  return (
    <div className='about-page'>
      <section className='about-me'>
        <h2 className='page-heading about-me-heading'>About Me 
          <span>
            <img className='kiwi-img' src={kiwi} alt='kiwi bird' />
          </span>
        </h2>
        <h3>Skills:</h3>
          <ul className='skill-list'>
            <li>ReactJS</li>
            <li>React Hooks</li>
            <li>Javascript ES5/ES6</li>
            <li>Router</li>
            <li>API</li>
            <li>Redux</li>
            <li>HTML</li>
            <li>CSS/SASS</li>
            <li>Material UI</li>
            <li>Mocha/Chai</li>
            <li>React Testing Library</li>
            <li>Jest</li>
          </ul>
        <h3>My story</h3>
        <p style={{ fontStyle: 'italic'}}>{data.aboutMeSection0}</p>
        <p>{data.aboutMeSection1}</p>
        <p>{data.aboutMeSection2}</p>
        <p>{data.aboutMeSection3}</p>
        <img className='photo' src={data.photos[0]} alt='With my foster dog' />
        <img className='photo' src={data.photos[1]} alt='Hiking in Colorado' />
      </section>
    </div>
  )
}

export default AboutMe