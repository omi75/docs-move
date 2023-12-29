import React from 'react'

function Background() {
  
  return (
    <div className='fixed z-[2] w-full h-screen'>
        <div className='absolute w-full py-10 top-[5%] flex justify-center text-zinc-600 text-xl font-semibold dark:text-black'>Documents</div>
        <h1 className='top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute text-[13vw] leading-none tracking-tight font-semibold text-slate-50 dark:text-zinc-900'>Docs</h1>
    </div>
  )
}

export default Background