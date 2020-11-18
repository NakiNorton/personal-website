import React, { useState } from 'react'
import { data } from '../../data'
import DotsMobileStepper from '../stepper'
import './Portfolio.css'

const Portfolio = () => {
  // const [currentIndex, getNextProject] = useState(0)

  const [currentIndex, getNextProject] = useState(0);

  const handleNext = () => {
    getNextProject((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    getNextProject((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='portfolio'>
      <h2 className='page-heading'>Portfolio</h2>
      <div className='stepper'>
      <DotsMobileStepper currentIndex={currentIndex} handleBack={handleBack} 
      handleNext={handleNext}/>
      </div>
      <div className='portfolio-container'>
        <div className='projects'>
          <h3>{data.projects[currentIndex].name}</h3>
          <article><span style={{ fontWeight: '600' }}>Overview:</span> {data.projects[currentIndex].description}</article>
          <br />
          <article><span style={{ fontWeight: '600' }}>Tech stack:</span> Tech listed here</article>
          <img className={data.projects[currentIndex].className} alt='gif of project' src={data.projects[currentIndex].image}/>
        </div>
    </div>
    </div>
  )

}

export default Portfolio;