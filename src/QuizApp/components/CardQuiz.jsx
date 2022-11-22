import React from 'react'
import {FaUserAlt,AiFillTag} from "react-icons/all"


export const CardQuiz = ({cuestionario,idCuestionario,categoria,idCategoria}) => {
    const {nombre}=JSON.parse(localStorage.getItem("user"));
  return (
        <div className="bg-slate-50 lg:w-[32%] md:w-[49%]  rounded-md shadow-lg mt-5">
            <img src={`../../../sources/${idCategoria}.jpg`} className='rounded-t-md' alt="" />
            <div className="p-2">
                <div className="flex items-center justify-between">
                    <p className='flex items-center text-[14px]  text-gray-700 font-semibold'><FaUserAlt className='mr-1'/>{nombre}</p>
                    <p className='flex items-center text-[14px] text-gray-700 font-semibold'><AiFillTag className='mr-1'/>{categoria}</p>
                </div>
                <h2 className='text-gray-700 text-2xl  mt-2 font-semibold'>{cuestionario}</h2>
                <button className='bg-orange-500 py-1 w-full rounded-sm mt-5 text-white font-semibold'>Editar Quiz</button>
            </div>
        </div>
  )
}
