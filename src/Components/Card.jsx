import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,reference}) {
  
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.15}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px]
      text-white px-8 py-10 overflow-hidden cursor-pointer bg-zinc-900/90 dark:bg-gray-100' >
        <FaRegFileAlt className=' dark:text-gray-800'/>
        <p className='mt-5 text-sm leading-tight font-semibold dark:text-gray-800'>{data.desc}</p>
        <footer className='absolute bottom-0 w-full left-0'>
            <div className='flex justify-between w-full items-center mb-3 px-8 py-3'>
                <span className={`dark:text-gray-900 font-semibold`}>{data.fileSize}</span>
                {data.close ? <MdDownloadForOffline className='h-6 w-6 text-white dark:text-black'/> : 
                <span className='p-1 font-bold text-black bg-white rounded-full'><IoCloseSharp/></span>}
            </div>

            {
                data.tag.isOpen && 
                (
                  
                    <div className='w-full py-4 bg-green-600'>
                        <h3 className='text-sm text-center font-semibold text-black dark:text-white'>{data.tag.tagTitle}</h3>
                    </div>
                )
            }
        </footer>
    </motion.div>

  )
}

export default Card