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

  const techList = (list) => {
    return list.map(tech => {
    return (
      <ul className='portfolio-tech-list'>
        <li className='tech-item'>{tech}</li>
      </ul>
    )
    })
  }

  const projects = () => {
    return data.projects.map(project => {
      return (
        <section className='card'>
          <div className='img-container'>
            <img className={project.className} alt='gif of project' src={project.image} />
          </div>
          <section className='project-description'>
            <h3 className='project-title'>{project.name}</h3>
            <p className='paragraph'>{project.description}</p>
            <p className='paragraph'>{techList(project.techStack)}</p>
          </section>
        </section>
      )
    })
  }

  return (
    <div className='portfolio'>
      <h2 className='portfolio-heading heading-secondary'>Portfolio</h2>
      <div className='portfolio-section'>
        { projects() }
      </div>  
    </div>
  )
}

export default Portfolio;