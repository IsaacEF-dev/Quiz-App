import React from 'react'
import {FaUserAlt,AiFillTag} from "react-icons/all"


export const CardQuiz = () => {
  return (
    <div className="flex justify-between items-center p-5">
        <div className="bg-slate-50 basis-1/3 rounded-md shadow-lg">
            <img src="../../../sources/super-smash-bros.webp" className='rounded-t-md' alt="" />
            <div className="p-2">
                <div className="flex items-center justify-between">
                    <p className='flex items-center text-[13px]  text-gray-700 font-semibold'><FaUserAlt className='mr-1'/>Isaac Escutia</p>
                    <p className='flex items-center text-[13px] text-gray-700 font-semibold'><AiFillTag className='mr-1'/>Videojuegos</p>
                </div>
                <h2 className='text-gray-700 text-xl  mt-2 font-semibold'>Marios Smash</h2>
                <button className='bg-orange-500 py-1 w-full rounded-sm mt-5 text-white font-semibold'>Editar Quiz</button>
            </div>
        </div>
    </div>
  )
}
