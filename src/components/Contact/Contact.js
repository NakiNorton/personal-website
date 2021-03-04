import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

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
      <div className='contact__container'>
        <h2 className='contact__heading heading-secondary'>Get In Touch</h2>
        <div className='contact__contact-icons'>
          <a className='icon' href='https://www.linkedin.com/in/stephanie-norton-12888453/'><LinkedInIcon fontSize='inherit' /></a>
          <a href='https://github.com/NakiNorton' className='icon'><GitHubIcon fontSize='inherit' /></a>
        </div>
   
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