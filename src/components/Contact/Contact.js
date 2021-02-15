import React from 'react'
import { data } from '../../data'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <section className='contact__text-box'> 
          <h2 className='contact-heading heading-secondary'>Get In Touch</h2>
            <ul className='contact-links'>
            <li className='contact-email'>Email: {data.email}</li>
            <li className='contact-links linkedIn-label link'>
              <a href='https://www.linkedin.com/in/stephanie-norton-12888453' className='labels'>
              <LinkedInIcon className='icon' classtyle={{ fontSize: 40 }} /> LinkedIn</a>
              </li>
            <li className='contact-links link'>
                <a href='https://github.com/NakiNorton' className='labels'>
              <GitHubIcon className='icon' classtyle={{ fontSize: 40 }} /> GitHub</a>
              </li>
            </ul>
        </section>
      </div> 
      <p className="logo">SN</p>
    </div>  
  )
}

export default Contact