import React from 'react'
import { Link } from "react-router-dom"

const Video = () => {
  return (
    <div>
        {/* thumbnil */}
        <div className='relative'>
            <Link to={`/video/1`}>
                <img src="https://img.youtube.com/vi/LPlKiPuAVM8/maxresdefault.jpg" alt="" className='w-full h-auto' />
            </Link>
            <p className='absolute right-2 bottom-2 bg-gray-900 text-white text-sm px-1 py-1'>1:52:39</p>
        </div>
        {/* video description  */}
        <div className='flex flex-row mr-2 gap-2'>
            <img src="https://randomuser.me/api/portraits/men/9.jpg" alt="avater" className='rounded-full h-6 w-6 shrink-0' />
            <div className='flex flex-col'>
                <Link to='/video/1'>
                <p className='text-slate-900 font-semibold text-sm'>Video Title 1</p>
               
                </Link>
                <span className='text-gray-500 text-xs hover:text-gray-600'>mostakem</span>
                <p>150k views . 23 january 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Video