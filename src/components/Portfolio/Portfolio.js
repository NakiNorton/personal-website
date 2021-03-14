import React from 'react'
import { data } from '../../data'


const Portfolio = () => {

  const projects = () => {
    return data.projects.map(project => {
      return (
        <section className='card'>
          <h3 className='project-title'>{project.name}</h3>
          <div className='img-container'>
            <img className={project.className} alt='gif of project' src={project.image} />
          </div>
          <section className='project-description'>
            {project.deployedUrl &&
              <a className='ext-link' href={project.deployedUrl} target="_blank" rel="noreferrer">Deployed App /</a> 
            } 
            <a className='ext-link' href={project.githubUrl} target="_blank" rel="noreferrer"> View repo</a>
            <p className='paragraph'>{project.description}</p>
            <p className='paragraph' style={{ color: 'black', marginBottom: '0'}}>Tech Stack:</p>
            <p className='paragraph'>{project.techStack}</p>
          </section>
        </section>
      )
    })
  }

  return (
    <div className='portfolio u-margin-bottom-small'>
      <h2 className='portfolio-heading heading-secondary'>Portfolio</h2>
      <div className='portfolio-section'>
        { projects() }
      </div>  
    </div>
  )
}

export default Portfolio;