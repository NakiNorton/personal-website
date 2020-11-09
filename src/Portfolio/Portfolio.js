import React from 'react'
// import projects from '../Projects'
import './Portfolio.css'
import lienFlashImage from '../assets/lienflash.gif'
import readme from '../assets/readme.gif'
import edible from '../assets/edible.gif'


const Portfolio = () => {
  return (
    <>
    <h1>Portfolio</h1>
    <div className='portfolio-container'>
        <div className='project'>
          <h2>Lien Flash</h2>
          <img className='img lienflash-img' alt='gif of project' src={lienFlashImage}/>
          <article>Read more</article>
        </div>
        <div className='project'>
          <h2>Edible.</h2>
        <img className='img edible-img' alt='gif of project' src={edible} />
          <article>Read more</article>
        </div>
        <div className='project'>
          <h2>ReadMe</h2>
          <img className='img readme-img' alt='gif of project' src={readme} />
          <article>Read more</article>
        </div>
        {/* <div className='project'>
          <h2>Rancid Tomatillos</h2>
          <img className='img rancid-img' alt='gif of project' src={lienFlashImage} />
          <article>Read more</article>
        </div> */}
      )
    </div>
    </>
  )

}

export default Portfolio;