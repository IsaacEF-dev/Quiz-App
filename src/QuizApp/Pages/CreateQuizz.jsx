import React from 'react'
import {AiFillCamera,BiSelectMultiple,BsChatSquareFill} from 'react-icons/all'
import { Link } from 'react-router-dom'
import { Pregunta } from '../components/Pregunta'

export const CreateQuizz = () => {
  return (
    <div className='w-full p-8 max-h-screen overflow-scroll bg-gray-200'>
        <div className="bg-white w-full rounded-md">
            <header className='p-3 relative h-32 flex items-center justify-center'>
                <img src="../../../sources/super-smash-bros.webp" className='absolute rounded-md w-full h-full  object-cover' alt="" />
                <div className='bg-black/30 absolute w-full z-10 h-full'></div>
                <h1 className='text-center text-5xl text-gray-100 font-semibold z-10'>Mario Smash</h1>
                <button className='absolute right-16 bg-gray-200/70 p-2 rounded-full z-20 cursor-pointer'>
                    <AiFillCamera className='text-gray-800 text-xl'/>
                </button>
            </header>
            <div className='bg-white w-full p-3  '>
                <div className="flex">
                    <div className="bg-gray-100 p-2 shadow-lg basis-1/4">
                        <h3 className='font-semibold text-[18px] text-center'>Crear Pregunta</h3>
                        <div className=" mt-4">
                            <Link to='/opcionMultiple' className="bg-orange-500  w-full py-2 px-3 rounded-full flex justify-center items-center text-white text-sm font-semibold">
                                <BiSelectMultiple className='text-white text-xl mr-1'/>
                                Opcion Multiple
                            </Link>
                            <button className="bg-orange-500  w-full py-2 px-3 mt-3 rounded-full flex justify-center items-center text-white text-sm font-semibold">
                                <BsChatSquareFill className='text-white text-base mr-1'/>
                                Pregunta Abierta
                            </button>
                        </div>
                    </div>
                    <div className="basis-3/4 bg-white px-1">
                        <Pregunta/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
