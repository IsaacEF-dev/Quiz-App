import React from 'react'
import {AiFillPicture,BsFillTrashFill,BsFillCheckCircleFill,BsPlusLg,MdCancel,FaArrowCircleRight} from "react-icons/all"
import { Link } from 'react-router-dom'
export const OpcionMultiple = () => {
  return (
    <>
        <div className="bg-gray-200 w-full max-h-screen sm:overflow-scroll p-8 ">
            <div className="bg-white p-7 rounded-lg relative">
                <div className="flex">
                    <button className='bg-gray-100 p-3 rounded-md'><AiFillPicture className='text-[24px] text-gray-600'/></button>
                    <input type="text" className='bg-gray-100 text-xl ml-3 rounded-full w-full px-5 py-1 border-none outline-none'
                     placeholder='Escribe Tu Pregunta...'/>
                </div>
                <div className=" mt-5 flex items-center justify-between">
                    <div className=" basis-[33%] bg-blue-400 rounded-md pb-10 pt-2 px-3 relative">
                        <div className="flex items-center justify-between w-full ">
                                <button className='text-base bg-black/20 p-2 rounded-md'>
                                    <BsFillTrashFill className='text-white'/>
                                </button>
                                <button className='text-base bg-black/25 p-[3px] rounded-full'>
                                    <BsFillCheckCircleFill className='text-white/80 text-[25px]'/>
                                </button>
                        </div>
                        <input type="text" 
                        className='bg-transparent text-xl w-full h-40 text-white font-bold bg-blue-500 text-center text-xl9.
                         placeholder:text-white border-none outline-none' 
                        placeholder='Escribe tu respuesta'/>
                        
                    </div>

                    <div className=" basis-[33%] bg-blue-400 rounded-md pb-10 pt-2 px-3 relative">
                        <div className="flex items-center justify-between w-full ">
                                <button className='text-base bg-black/20 p-2 rounded-md'>
                                    <BsFillTrashFill className='text-white'/>
                                </button>
                                <button className='text-base bg-black/25 p-[3px] rounded-full'>
                                    <BsFillCheckCircleFill className='text-white/80 text-[25px]'/>
                                </button>
                        </div>
                        <input type="text" 
                        className='bg-transparent w-full text-xl h-40 bg-blue-500 text-center text-xl9.
                         placeholder:text-white border-none outline-none text-white font-bold' 
                        placeholder='Escribe tu respuesta'/>
                        
                    </div>

                    <div className=" basis-[33%] bg-blue-400 rounded-md pb-10 pt-2 px-3 relative">
                        <div className="flex items-center justify-between w-full ">
                                <button className='text-base bg-black/20 p-2 rounded-md'>
                                    <BsFillTrashFill className='text-white'/>
                                </button>
                                <button className='text-base bg-black/25 p-[3px] rounded-full'>
                                    <BsFillCheckCircleFill className='text-white/80 text-[25px]'/>
                                </button>
                        </div>
                        <input type="text" 
                        className='bg-transparent w-full h-40 bg-blue-500 text-center text-xl9.
                         placeholder:text-white border-none outline-none text-xl text-white font-bold' 
                        placeholder='Escribe tu respuesta'/>
                        
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
                <button className='absolute -bottom-6 left-1/2 bg-gray-100 shadow-md p-3 rounded-full'>
                    <BsPlusLg className='text-lg'/>
                </button>
            </div>
        </div>
    </>
  )
}
