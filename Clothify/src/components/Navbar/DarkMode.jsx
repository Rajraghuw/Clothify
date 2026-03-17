import React, { useEffect } from 'react'
import LightModeIcon from '../../assets/website/LightMode.png'
import DarkModeIcon from '../../assets/website/DarkMode.png'
import { useState } from 'react'
const DarkMode = () => {
    const [Theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    )
    const element = document.documentElement // html element target
    console.log(element);
    useEffect(() => {
       if(Theme === 'dark') {
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
       } else {
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
       }
        
    }, [Theme])
    
  return (
    <>
      <div className='relative'>

        <img src={LightModeIcon} alt="Light Mode"
        onClick={() => setTheme(Theme === 'light' ? 'dark' : 'light')}
         className={`w-16 py-1  cursor-pointer
          drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
           transition-all duration-300 absolute right-0 z-10 ${Theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}/>


        <img src={DarkModeIcon} alt="Dark Mode"
        onClick={() => setTheme(Theme === 'light' ? 'dark' : 'light')}
         className='w-16 pb-0.5 cursor-pointer
          drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
           transition-all duration-300'/>
        
      </div>
    </>
  )
}

export default DarkMode
 