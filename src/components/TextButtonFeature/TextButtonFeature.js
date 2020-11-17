import React, { useState } from 'react'
import './Button.css';

const TextButtonFeature = () => {
  const [status, updateStatus] = useState(true)
  
  return (
    <button className='btn-primary' onClick={() => updateStatus(!status)}>{status ? "Hello! Kia ora" : "Welcome! Nau mai, haere mai"}</button>
  )

}
export default TextButtonFeature