import React from 'react'
import {IoMdAddCircle} from "react-icons/io"


export const NoCreateQuizz = ({Cancel,setCancel}) => {
  return (
    <div className="flex items-center flex-col py-8 mb-12">
        <img src="../../../sources/Startup_Monochromatic.svg" className='w-1/2 xl:w-[37%]' alt="" />
        <p className='text-orange-300 text-3xl mt-2'>Crea tu primer Quizz</p>
        <button className='bg-orange-500 p-2 rounded-md flex items-center mt-6 text-white font-semibold'
        onClick={()=>setCancel(!Cancel)}>
            <IoMdAddCircle className='mr-1 text-base'/> 
            Crear Quiz
        </button>
    </div>
  )
}
