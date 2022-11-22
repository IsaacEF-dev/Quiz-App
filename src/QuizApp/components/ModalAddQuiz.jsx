import { useState } from 'react'
import {FaArrowCircleRight,MdCancel} from 'react-icons/all'
import { Link, useNavigate } from 'react-router-dom';
import { useFetch } from '../../../../React Pages/pokemon/src/Pokemons/hooks/useFetch';
import {useForm} from "../Hooks/useForm"
import { Categoria } from '../services/Categoria';
import { Cuestionario } from '../services/Cuestionario';
const categoria=new Categoria();
export const ModalAddQuiz = ({Cancel,setCancel}) => {
  
  const {data,isLoading}=useFetch("http://localhost:4002/categoria");
  const navigate=useNavigate();
  
  const {cuestionario,inputChange}=useForm({
    cuestionario:""
  })
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
  
  let idCategoria;
const onCategoria=(e)=>{
  e.preventDefault();
  e.target.className="categoria shadow-lg bg-orange-600";
  idCategoria=e.target.getAttribute('data-id');
  console.log(idCategoria);
}

const onCuestionario=(e)=>{
  e.preventDefault();
  const {id}=JSON.parse(localStorage.getItem("user"));
 
  const cuestionarios=new Cuestionario();
  
  cuestionarios.insertCuestionario(cuestionario,idCategoria,id);
  navigate("/CreateQuiz",{state:{Cuestionario:cuestionario,categoria:idCategoria}})
}
  
  
  return (
    !isLoading&&
    <div className={`w-screen h-screen fixed top-0 left-0  bg-black/60 ${Cancel ? "hidden":"inline-block"}`}>
        <div className="flex justify-center items-center h-full">
          <form className="bg-white w-[33rem] py-5 px-7 rounded-md">
            <h3 className='text-orange-400 text-2xl font-semibold text-center'>Crear Quizz</h3>
            <div className="">
              <label htmlFor="" className='block text-base font-semibold mb-2'>Titulo:</label>
              <input type="text" name='cuestionario' value={cuestionario} 
              className='bg-gray-100  outline-none px-1 w-full h-9 border-none' onChange={inputChange}/>
            </div>
            <div className="mt-7">
              <label htmlFor="" className=' font-semibold'>Categorias:</label>
              <div className="flex flex-wrap">
               
                    {
                      data.data.map(categoria=>(
                        <p className="categoria bg-orange-500" key={categoria.id} data-id={categoria.id} onClick={onCategoria}>{categoria.nombre}</p>
                      ))
                    }
                
              </div>
            </div>
            <div className="flex item-center justify-end">
              <button 
                className='btnCancel'
                onClick={onStartQuiz}>
                Cancelar
                <MdCancel className='text-white ml-2 '/>
              </button>
              <button 
                className='btnContinuar' onClick={onCuestionario} >
                Continuar 
                <FaArrowCircleRight className='text-white ml-2 '/>
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}
