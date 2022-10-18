import React from 'react'
import {AiFillPicture,BsFillTrashFill,RiEdit2Fill,MdCancel,FaArrowCircleRight} from "react-icons/all"
import { Link } from 'react-router-dom'

export const PreguntaAbierta = () => {
  return (
    <div className="bg-gray-200 w-full max-h-screen sm:overflow-scroll p-8">
        <div className="bg-white p-7 rounded-lg mb-4">
            <div className="flex">
                <button className='bg-gray-100 h-44 basis-1/4 font-semibold text-gray-500 p-3 rounded-md'>
                    Agregar Imagen
                    <AiFillPicture className='text-[30px] mx-auto mt-2 text-gray-600'/>
                </button>
                <input type="text" className='bg-gray-100 text-center basis-3/4 text-2xl ml-3 rounded-md w-full px-5 py-1 border-none outline-none'
                placeholder='Escribe Tu Pregunta...'/>
            </div>
            <div className="flex flex-col w-[30rem] mx-auto justify-center ">
                <p className='text-base font-semibold mt-6 mb-1'>Posible Respuestas:</p>
                <div className="flex">
                    <input type="text" placeholder='Escribe tu respuesta' className='bg-gray-100 text-base w-full rounded-l-full border-none outline-none py-2 px-4' />
                    <button className='bg-orange-500/90 rounded-r-full px-5 text-white font-semibold'>Agregar</button>
                </div>
                <div className=" mt-8">
                    <p className='text-center text-lg font-bold'>Respuesta Validas</p>
                    <div className="flex justify-between bg-gray-50 mt-3 items-center p-2 px-4 shadow-md rounded-full">
                        <p className='font-semibold text-[16px]'>Antigua roma en el siglo 15 </p>
                        <div className="flex">
                            <button className='bg-red-500 p-2 rounded-full mr-2'><BsFillTrashFill className='text-white'/></button>
                            <button className='bg-orange-400 p-2 rounded-full'><RiEdit2Fill className='text-white'/></button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flex item-center justify-end">
                <Link to='/CreateQuiz' 
                    className='btnCancel'>
                    Cancelar
                    <MdCancel className='text-white ml-2 '/>
                </Link>
                <button 
                className='btnContinuar'>
                    Agregar
                    <FaArrowCircleRight className='text-white ml-2 '/>
                </button>
            </div>
        </div>
    </div>
  )
}
