import React from 'react'
import { useState,useEffect } from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";


function App() {
  const [theme,setTheme]=useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  function switchTheme()
  {
     theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  useEffect(()=>{
      localStorage.setItem("theme",theme);
  },[theme])

  return (
    <div className={`${theme} w-full h-screen`}>
      <div className='w-full h-screen bg-zinc-800 dark:bg-white relative'>
        <Background/>
        <Foreground/>
        <span onClick={switchTheme} className='z-[4] absolute top-3 right-3 w-5 h-5 text-xl text-white dark:text-slate-800 cursor-pointer'>
           {
             theme === "dark" ? (<FaMoon/>) : (<MdLightMode/>)
           }
        </span>
      </div>
    </div>
  )
}

export default App