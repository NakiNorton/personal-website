import React from 'react'
import { data } from '../../data'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h2 className='page-heading'>Get In Touch!</h2>
      <section className='contact-container'>
        <h2>{data.name}</h2>
          <ul className='contact-links'>
          <li className='contact-email'>{data.email}</li>
          <li className='contact-links linkedIn-label'>
            <a href='https://www.linkedin.com/in/stephanie-norton-12888453' className='labels'>
              <LinkedInIcon className='icon' classtyle={{ fontSize: 40 }} /> LinkedIn</a>
            </li>
          <li className='contact-link'>
              <a href='https://github.com/NakiNorton' className='labels'>
              <GitHubIcon className='icon' classtyle={{ fontSize: 40 }} /> GitHub</a>
            </li>
          </ul>
      </section>
    </div>
  )
}

export default Contact