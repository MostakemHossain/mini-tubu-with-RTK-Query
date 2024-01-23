import React from 'react'
import { Link } from 'react-router-dom'

const RelatedVideo = () => {
    return (
        <div className='w-full flex flex-row gap-2 mb-4'>
            <div className='relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]'>
                <Link to={`/videos/${1}`}>
                    <img src="https://i.ytimg.com/vi/zgGhzuBZOQg/maxresdefault.jpg" alt="" className='w-full h-auto' />
                </Link>
                <p className='absolute right-2 bottom-2 bg-gray-900 text-white text-sm px-1 py-1'>1:52:03</p>

            </div>
            <div className='flex flex-row mr-2 mt-2 gap-2'>
                <img src="https://randomuser.me/api/portraits/men/9.jpg" alt="avater" className='rounded-full h-6 w-6 shrink-0' />
                <div className='flex flex-col'>
                    <Link to={`/videos/${1}`}>
                        <p className='text-slate-900 font-semibold text-sm'>{"video title"}</p>

                    </Link>
                    <span className='text-gray-500 text-xs hover:text-gray-600'>{"Mostakem"}</span>
                    <p>{"150k"} views . {"15 january 2023"}</p>
                </div>
            </div>
        </div>
    )
}

export default RelatedVideo