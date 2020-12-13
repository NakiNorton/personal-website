import React, { useState } from 'react'
import { data } from '../../data'
import DotsMobileStepper from '../stepper'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Portfolio.css'

const Portfolio = () => {
  const [currentIndex, getNextProject] = useState(0);
  const [featuresAreVisible, displayFeatures] = useState(false);

  const handleNext = () => {
    getNextProject((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    getNextProject((prevActiveStep) => prevActiveStep - 1);
  };

  const showFeatures = () => {
    !featuresAreVisible ? displayFeatures(true) : displayFeatures(false)
  }

  return (
    <div className='portfolio'>
      <h2 className='page-heading'>Portfolio</h2>
      <div className='stepper'>
      <DotsMobileStepper currentIndex={currentIndex} handleBack={handleBack} 
      handleNext={handleNext}/>
      </div>
      <section className='portfolio-container'>
        <div className='projects'>
          <h3>{data.projects[currentIndex].name}</h3>
          <article><span style={{ fontWeight: '600' }}>Overview:</span> {data.projects[currentIndex].description}
          <br />
            <button className='features-btn' onClick={() => showFeatures()}>Features <span><ExpandMoreIcon fontSize='medium'></ExpandMoreIcon></span></button>
          </article>
          { featuresAreVisible &&
            <article><span style={{ fontWeight: '600' }}></span> {data.projects[currentIndex].features}</article>
          }
          <br />
          <article><span style={{ fontWeight: '600' }}>Tech stack: </span> 
           {data.projects[currentIndex].techStack}</article>
          <img className={data.projects[currentIndex].className} alt='gif of project' src={data.projects[currentIndex].image}/>
        </div>
      </section>
    </div>
  )
}

export default Portfolio;