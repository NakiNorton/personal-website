import React from 'react'
import { data } from '../../data'
import './Portfolio.css'

const Portfolio = () => {

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
            <a className='ext-link' href={project.deployedUrl} target="_blank">Deployed App</a> / <a className='ext-link' href={project.githubUrl} target="_blank">View repo</a>
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