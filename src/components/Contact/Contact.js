import React from 'react'
import { data } from '../../data'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Contact.css'

const Contact = () => {
  return (
    <>
      <h2 className='page-heading'>Get In Touch!</h2>
      <section className='contact-container'>
        <h2>{data.name}</h2>
          <ul className='contact-links'>
          <li>{data.email}</li>
          <li className='linkedIn-label'>
              <a href='https://www.linkedin.com/in/stephanie-norton-12888453'>
              <LinkedInIcon className='icon' classtyle={{ fontSize: 40 }} /> LinkedIn</a>
            </li>
            <li>
              <a href='https://github.com/NakiNorton' className='labels'>
              <GitHubIcon className='icon' classtyle={{ fontSize: 40 }} /> GitHub</a>
            </li>
          </ul>
      </section>
    </>
  )
}

export default Contact