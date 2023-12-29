import React, { useRef } from 'react'
import Card from './Card'
import { data } from '../data'

function Foreground() {
    const ref=useRef(null);
  return (
        <div ref={ref} className='fixed z-[3] w-full h-screen top-0 left-0 flex gap-10 p-5'>
            {
                data.map((item,index)=>(
                    <Card key={index} data={item} reference={ref}/>
                ))
            }
        </div>
  )
}

export default Foreground