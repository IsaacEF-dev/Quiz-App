import React, { useState } from 'react'
import {AiFillPicture,BsFillTrashFill,BsFillCheckCircleFill,BsPlusLg,MdCancel,FaArrowCircleRight} from "react-icons/all"
import { Link } from 'react-router-dom'
import { useForm } from '../Hooks/useForm'
import {ComponentePregunta} from "../components/componentePregunta"
export const OpcionMultiple = () => {

    const [pregunta, setPregunta] = useState(["","",""])
    
    const addPregunta=(e)=>{
        e.preventDefault();
        
        setPregunta([...pregunta,""])
    }

    const handleChange=((e,index)=>{
        const pre=[...pregunta];
        pre[index]=e.target.value;
        setPregunta(pre);
    })

    const removePregunta=(e,index)=>{
        const lista=[...pregunta];
        lista.splice(index,1);
        setPregunta(lista);
    }

    const addTrue=(e)=>{
        e.preventDefault();
        if(e.target.tagName=="path"){
            const anterior=document.querySelector("button .text-green-500");
        
            if(anterior){
                anterior.classList="text-white/80 text-[25px]";
            }
            e.target.nearestViewportElement.classList="text-white/80 text-[25px] text-green-500"
        }
        
       
    }
  return (
    <>
        <div className="bg-gray-200 w-full max-h-screen sm:overflow-scroll p-8 ">
            <div className="bg-white p-7 rounded-lg relative mb-16">
                <div className="flex">
                    <button className='bg-gray-100 h-44 basis-1/4 font-semibold text-gray-500 p-3 rounded-md'>
                        Agregar Imagen
                        <AiFillPicture className='text-[30px] mx-auto mt-2 text-gray-600'/>
                    </button>
                    <input type="text" className='bg-gray-100 text-center basis-3/4 text-2xl ml-3 rounded-md w-full px-5 py-1 border-none outline-none'
                     placeholder='Escribe Tu Pregunta...'/>
                </div>
                <div className=" mt-5 flex items-center flex-wrap justify-between">
                    
                    {pregunta.map((campo,index)=>(
                        <div className=" basis-[33%] bg-blue-400 mt-2 rounded-md pb-10 pt-2 px-3 relative" key={index}>
                            <div className="flex items-center pb-1 justify-between w-full ">
                                    <button className='text-base bg-black/20 p-2 rounded-md'
                                    type='button'
                                    onClick={(e)=>removePregunta(e,index)}>
                                        <BsFillTrashFill className='text-white'/>
                                    </button>
                                    <button className='text-base bg-black/25 p-[2px] rounded-full' onClick={addTrue}>
                                        <BsFillCheckCircleFill className='text-white/80 text-[25px]'/>
                                    </button>
                            </div>
                            <input type="text" 
                            className='bg-transparent text-xl w-full h-40 text-white font-bold bg-blue-400 text-center text-xl9.
                            placeholder:text-white border-none outline-none rounded-md' 
                            placeholder='Escribe tu respuesta' name='respuesta1' value={campo} onChange={(e)=>handleChange(e,index)} />
                            
                        </div>
                    ))}
                    
                    
                </div>
                <div className="flex item-center justify-end">
                    <Link to='/CreateQuiz' 
                        className='btnCancel'>
                        Cancelar
                        <MdCancel className='text-white ml-2 '/>
                    </Link>
                    <button 
                        className='btnContinuar' disabled={(pregunta.length>0)? false:true}>
                        Agregar
                        <FaArrowCircleRight className='text-white ml-2 '/>
                    </button>
                </div>
                <button className='absolute -bottom-6 left-1/2 bg-gray-100 shadow-md p-3 rounded-full'
                disabled={(pregunta.length==6)?true:false}
                onClick={addPregunta}>
                    <BsPlusLg className='text-lg'/>
                </button>
            </div>
        </div>
    </>
  )
}
