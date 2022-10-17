import { stringify } from 'postcss'
import React from 'react'
import {BiEditAlt} from "react-icons/all"
import { Link } from 'react-router-dom';

export const Perfil = () => {
  const user=JSON.parse(localStorage.getItem("user"));
  const {nombre,correo,id}=user;
  return (
    <div className='bg-gray-200 w-full max-h-screen sm:overflow-scroll p-8 '>
      <header className='bg-white  rounded-md'>
        <div className='flex justify-between p-4 items-center'>
          <div>
            <p className='text-2xl font-semibold'>{nombre} Escutia</p>
            <p>{correo}</p>
          </div>
          <div className='flex flex-col items-center'>
            <button className='flex items-center text-base font-semibold'>
              <BiEditAlt className='mr-1'/>
              Editar Perfil
            </button>
            <div className='flex items-center mt-5'>
              <div className='mr-8 flex flex-col items-center'>
                <p className='text-orange-400 font-semibold text-2xl'>0</p>
                <h3 className='font-semibold text-gray-700 text-base'>Cuestionarios</h3>
              </div>
              <div className='flex flex-col items-center'>
                <p className='text-orange-400 font-semibold text-2xl'>0</p>
                <h3 className='font-semibold text-gray-700 text-base'>Resueltos</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white border-t-2 p-4 border-gray-300 rounded-b-md">
          <div className="flex">
            <Link className='mr-9 font-bold text-[17px] text-orange-400 '>Cuestionarios</Link>
            <Link className='mr-9 font-bold text-[17px] text-orange-400'>Resueltos</Link>
          </div>
        </div>
      </header>
      <h2>Comer</h2>
    </div>
  )
}
