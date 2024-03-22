import React, { useContext } from 'react'
import '../index.css'
import { themeContext } from '../context/themeContext.1';
function DarkTheme() {
    const {theme} =useContext(themeContext);


  return (
    <div className={theme}>
      
    </div>
  )
}

export default DarkTheme
