import React from 'react'
import  {MdEdit,BsFillTrashFill} from 'react-icons/all'
export const Pregunta = () => {
  return (
    <div className="bg-gray-50 rounded-md p-2">
                            <div className="flex justify-between items-center ">
                                <h3 className='font-semibold'>Pregunta 1</h3>
                                <div className="flex items-center">
                                    <button className='bg-gray-200 p-2 rounded-md text-sm font-semibold flex items-center'>
                                        <MdEdit className='mr-1'/>Editar
                                    </button>
                                    <button className='bg-gray-200 p-2 rounded-md text-sm ml-2 font-semibold flex items-center'>
                                        <BsFillTrashFill className='mr-1'/>Eliminar
                                    </button>
                                </div>
                            </div>
                            <div className="">
                            <div className=" mt-4  py-2">
                                <div className="flex items-center border-b-2 border-gray-300">
                                    <img src="../../../sources/kirby.avif" className='object-contain w-28 h-24 rounded-md' alt="" />
                                    <p className='text-gray-700 font-bold ml-3 text-lg'>Como se llama el siguente personaje</p>
                                </div>
                                <div className="flex flex-wrap justify-between mt-3 ">
                                    <div className=" flex flex-wrap items-center ">
                                        <p className='bg-red-600 w-4 h-4 rounded-full'></p>
                                        <p className='ml-2 text-gray-900 font-semibold'>Mario Bross</p>
                                    </div>
                                    <div className=" flex flex-wrap items-center ">
                                        <p className='bg-green-600 w-4 h-4 rounded-full'></p>
                                        <p className='ml-2 text-gray-900 font-semibold'>Kirby</p>
                                    </div>
                                    <div className=" flex flex-wrap items-center">
                                        <p className='bg-red-600 w-4 h-4 rounded-full'></p>
                                        <p className='ml-2 text-gray-900 font-semibold'>Zelda</p>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
  )
}
