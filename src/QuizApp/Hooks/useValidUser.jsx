import React, { useState } from 'react'

export const useValidUser = () => {
    const [validUser, setValidUser] = useState(false)
    
  return{
    validUser,
    setValidUser,
  }
}
