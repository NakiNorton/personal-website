import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [msgSubmitted, setMsgSubmitted] = useState(false)
  const [msgError, setMsgError] = useState(false)

  const handleClick = (e) => {
    let service_id = 'contactForm'
    const templateId = 'contactForm'
    const userId = 'user_kLBvhhw1nt5nmgAeYLlAk'
    const templateParams = {
      'from_name': name,
      'reply_to': email,
      'message': message
    }

    emailjs.send(service_id, templateId, templateParams, userId)
      .then((response) => {
        setMsgSubmitted(true)
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        setMsgError(true)
        console.log('FAILED...', err);
      });

    e.preventDefault()
  }

  return (
    <div className='contact'>
      <div className='contact-container'>
        <section className='contact__text-box'> 
          <h2 className='contact-heading heading-secondary'>Get In Touch</h2>
            <ul className='contact-links'>
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
        <div className="form-area">
          {msgSubmitted &&
            <p className="p">Thanks for your message!</p>
          }

          {msgError &&
            <p className="p">Sorry, something went wrong and we couldn't send your message. Please refresh the page and try again.</p>
          }

          {(!msgSubmitted && !msgError) &&
            <>
              <form onSubmit={handleClick}>
                <input id="nameInput" name="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input id="emailInput" name="email" type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <textarea id="message" name="message" type="text" placeholder="Your Message..." rows="5" maxLength='250' value={message} onChange={(e) => setMessage(e.target.value)} required />
                <input type="submit" value="Send" id="submit-btn" />
              </form>
            </>
          }
        </div>
      </div> 
    </div>  
  )
}

export default Contact