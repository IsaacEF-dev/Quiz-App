import { useState } from 'react'
import {FaArrowCircleRight,MdCancel} from 'react-icons/all'
import { Link } from 'react-router-dom';

export const ModalAddQuiz = ({Cancel,setCancel}) => {
  

  const onStartQuiz=(e)=>{
    e.preventDefault();
    if(Cancel){
      e.target.className="btnCancel hidden";
    }else{
      e.target.className='btnCancel inline-block'
    }
    setCancel(!Cancel)
  }

  const onContinuar=(e)=>{
    e.preventDefault();
  }

  return (
    <div className={`w-screen h-screen fixed top-0 left-0 bg-black/60 ${Cancel ? "hidden":"inline-block"}`}>
        <div className="flex justify-center items-center h-full">
          <form className="bg-white w-[33rem] py-5 px-7 rounded-md">
            <h3 className='text-orange-400 text-2xl font-semibold text-center'>Crear Quizz</h3>
            <div className="">
              <label htmlFor="" className='block text-base font-semibold mb-2'>Titulo:</label>
              <input type="text" className='bg-gray-100  outline-none px-1 w-full h-9 border-none'/>
            </div>
            <div className="mt-7">
              <label htmlFor="" className=' font-semibold'>Categorias:</label>
              <div className="flex flex-wrap">
                <a className='categoria' href="">Videojuegos</a>
                <a className='categoria' href="">Anime</a>
                <a className='categoria' href="">Educacion</a>
                <a className='categoria' href="">Deportes</a>
                <a className='categoria' href="">Tecnologia</a>
                <a className='categoria' href="">Moda</a>
                <a className='categoria' href="">Idiomas</a>
                <a className='categoria' href="">Moda</a>
                <a className='categoria' href="">Idiomas</a>
              </div>
            </div>
            <div className="flex item-center justify-end">
              <button 
                className='btnCancel'
                onClick={onStartQuiz}>
                Cancelar
                <MdCancel className='text-white ml-2 '/>
              </button>
              <Link to='/CreateQuiz'
              className='btnContinuar' >
              Continuar 
              <FaArrowCircleRight className='text-white ml-2 '/>
              </Link>
            </div>
          </form>
        </div>
    </div>
  )
}
