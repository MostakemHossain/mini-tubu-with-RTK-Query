import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Description = () => {
    return (
        <div>
            <h1 className='text-lg tracking-tight text-slate-800 font-semibold'>next js 14 full course {" "}</h1>
            <div className='pb-4 flex items-center justify-between border-b gap-4'>
                <p className='text-sm leading-[1.72] text-slate-600 w-full'>uploaded on 15 december 2023</p>
                <div className='w-full flex justify-end'>
                    <Link to={`/videos/edit/1`} className='flex gap-1 items-center hover:text-blue-600 cursor-pointer'>
                        <div>
                            <FaEdit className='w-4' />
                        </div>
                        <div>
                            <span className='text-sm leading-[1.72] text-slate-600 w-full'>Edit</span>
                        </div>
                    </Link>
                    <div className='flex gap-1 items-center hover:text-red-600 cursor-pointer'>
                        <div>
                            <FaTrash className='w-4' />
                        </div>
                        <div>
                            <span className='text-sm leading-[1.72] text-slate-600 w-full'>Delete</span>
                        </div>
                    </div>
                </div>
               
            </div>
            <div className='mt-4 text-sm text-[#334155]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos aliquid aliquam earum tenetur mollitia nisi dolorum corrupti consequuntur neque.
                </div>
        </div>
    )
}

export default Description