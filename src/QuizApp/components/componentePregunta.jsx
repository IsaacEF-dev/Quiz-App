import React from 'react'
import {BsFillTrashFill,BsFillCheckCircleFill} from "react-icons/all"
export const ComponentePregunta = ({removePregunta,index}) => {
    console.log("index",index)
  return (
    <div className=" basis-[33%] bg-blue-400 mt-2 rounded-md pb-10 pt-2 px-3 relative">
                        <div className="flex items-center pb-1 justify-between w-full ">
                                <button className='text-base bg-black/20 p-2 rounded-md'
                                onClick={removePregunta}>
                                    <BsFillTrashFill className='text-white'/>
                                </button>
                                <button className='text-base bg-black/25 p-[3px] rounded-full'>
                                    <BsFillCheckCircleFill className='text-white/80 text-[25px]'/>
                                </button>
                        </div>
                        <input type="text" 
                        className='bg-transparent text-xl w-full h-40 text-white font-bold bg-blue-400 text-center text-xl9.
                         placeholder:text-white border-none outline-none rounded-md' 
                        placeholder='Escribe tu respuesta' name='respuesta1' value={""} onChange={()=>{}}/>
                        
    </div>
  )
}
