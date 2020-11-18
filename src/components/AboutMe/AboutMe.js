import React from 'react'
// import Paper from '@material-ui/core/Paper'
import { data } from '../../data'
import './AboutMe.css'


const AboutMe = () => {
  return (
    <section className='about-me'>
    <h2 className='page-heading'>About me..</h2>
      <p>{data.aboutMeSection0}</p>
      <p>{data.aboutMeSection1}</p>
      <p>{data.aboutMeSection2}</p>
      <p>{data.aboutMeSection3}</p>
      <img className='photo' src={data.photos[0]} alt='With my foster dog' />
      <img className='photo' src={data.photos[1]} alt='Hiking in Colorado' />
    </section>
  )
}

export default AboutMe