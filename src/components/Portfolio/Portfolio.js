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
    <div className='portfolio u-margin-top-big'>
      <h2 className='portfolio-heading heading-secondary'>Portfolio</h2>
      <div className='portfolio-section'>
        <div className='stepper'>
        <DotsMobileStepper currentIndex={currentIndex} handleBack={handleBack} 
        handleNext={handleNext}/>
        </div>
        <section className='portfolio-container'>
          <div className='projects'>
            <h3 className="project-title u-margin-top-medium">{data.projects[currentIndex].name}</h3>
            <article className="paragraph"><b style={{ fontStyle: 'bold', fontSize: '1.5rem'}}>Overview:</b> {data.projects[currentIndex].description}
            <br />
            <br />
              <article className="paragraph"><span style={{ fontWeight: '600', fontSize: '1.5rem' }}>Tech stack: </span> 
            {data.projects[currentIndex].techStack}</article>

            <button className='expand-btn' onClick={() => showFeatures()}>Features <span><ExpandMoreIcon fontSize='medium'></ExpandMoreIcon></span></button>
            </article>

            {features &&
              <article className="paragraph">{data.projects[currentIndex].features}</article>
            }
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