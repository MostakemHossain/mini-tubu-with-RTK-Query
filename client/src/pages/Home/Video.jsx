import React from 'react'
import { Link } from "react-router-dom"

const Video = ({ video }) => {
    const { id, thumbnail, title, author, duration, views, description,date } = video
    return (
        <div>
            {/* thumbnil */}
            <div className='relative'>
                <Link to={`/videos/${id}`}>
                    <img src={thumbnail} alt="" className='w-full h-auto' />
                </Link>
                <p className='absolute right-2 bottom-2 bg-gray-900 text-white text-sm px-1 py-1'>{duration}</p>
            </div>
            {/* video description  */}
            <div className='flex flex-row mr-2 mt-2 gap-2'>
                <img src="https://randomuser.me/api/portraits/men/9.jpg" alt="avater" className='rounded-full h-6 w-6 shrink-0' />
                <div className='flex flex-col'>
                    <Link to={`/videos/${id}`}>
                        <p className='text-slate-900 font-semibold text-sm'>{title}</p>

                    </Link>
                    <span className='text-gray-500 text-xs hover:text-gray-600'>{author}</span>
                    <p>{views} views . {date}</p>
                </div>
            </div>
        </div>
    )
}

export default Video