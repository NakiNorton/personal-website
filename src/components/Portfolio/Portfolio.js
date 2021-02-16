import React, { useState } from 'react'
import { data } from '../../data'
import DotsMobileStepper from '../stepper'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Portfolio.css'

const Portfolio = () => {
  const [currentIndex, getNextProject] = useState(0);
  const [features, setFeatures] = useState(false);

  const handleNext = () => {
    getNextProject((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    getNextProject((prevActiveStep) => prevActiveStep - 1);
  };

  const showFeatures = () => {
    !features ? setFeatures(true) : setFeatures(false)
  }

  return (
    <div className='portfolio'>
      <h2 className='portfolio-heading heading-secondary'>Portfolio</h2>
      <div className='portfolio-section'>
        <div className='stepper'>
        <DotsMobileStepper currentIndex={currentIndex} handleBack={handleBack} 
        handleNext={handleNext}/>
        </div>
        <section className='portfolio-container'>
          <div className="portfolio-col-1">
            <h3 className="project-title">{data.projects[currentIndex].name}</h3>
            <article className="paragraph"><b className="project-span-text">Overview:</b> {data.projects[currentIndex].description}
            <br />
            <br />
              <article className="paragraph"><b className="project-span-text">Tech stack: </b> 
            {data.projects[currentIndex].techStack}</article>

            <button className='expand-btn' onClick={() => showFeatures()}>Features <span><ExpandMoreIcon fontSize='medium'></ExpandMoreIcon></span></button>
            </article>

            {features &&
              <article className="paragraph">{data.projects[currentIndex].features}</article>
            }
          </div>
          <div className="portfolio-col-2">
            <div className="img-container">
              <img className={data.projects[currentIndex].className} alt='gif of project' src={data.projects[currentIndex].image}/>
            </div>
          </div>
        </section>
      </div>  
    </div>
  )
}

export default Portfolio;