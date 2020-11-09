import React, { useState } from 'react'

// with hooks

const ButtonOne = () => {
  const [status, updateStatus] = useState(true)
  
  return (
    <button onClick={() => updateStatus(!status)}>{status ? "Hello!" : "Welcome!"}</button>
  )

}
export default ButtonOne