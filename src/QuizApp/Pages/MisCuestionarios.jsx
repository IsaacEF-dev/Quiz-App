import React, { useEffect, useState } from 'react'
import {IoMdAddCircle} from "react-icons/all"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../../../../React Pages/pokemon/src/Pokemons/hooks/useFetch'
import { CardQuiz } from '../components/CardQuiz'
import { ModalAddQuiz } from '../components/ModalAddQuiz'
import { NoCreateQuizz } from '../components/NoCreateQuizz'
import { useForm } from '../Hooks/useForm'
import { Cuestionario } from '../services/Cuestionario';
const cuestionario=new Cuestionario();
let ids;
export const MisCuestionarios = () => {

  const [Cancel, setCancel] = useState(true)
  const [cuestionarios, setcuestionarios] = useState()
  const {id}=JSON.parse(localStorage.getItem("user"));
  
  
  const getf=async()=>{
    const {data,isLoading}= await cuestionario.getCuestionarios(id);
    setcuestionarios(data.data);
    
  }
  useEffect(() => {
   getf()
  }, [])
  

  
  return (
    <div className='w-full p-8 max-h-screen h-screen overflow-auto bg-gray-200'>
        <header className='bg-white p-4 rounded-t-md flex items-center justify-between border-b-2'>
          <h1 className='text-xl font-semibold'>Mis Cuestionarios</h1>
          <button className='bg-orange-500 p-2 rounded-md flex items-center text-white font-semibold'
          onClick={()=>setCancel(!Cancel)}>
            <IoMdAddCircle className='mr-1 text-base'/>
            Crear Quiz
          </button>
        </header>
        <section className='bg-white h-auto flex justify-between items-center p-5 flex-wrap mb-16'>
          {
            cuestionarios && cuestionarios.map(cuestionario=>(
              <CardQuiz key={cuestionario.idCuestionario} {...cuestionario}/>
            ))
          }
          
          <ModalAddQuiz Cancel={Cancel} setCancel={setCancel}/>
          {/* <NoCreateQuizz Cancel={Cancel} setCancel={setCancel}/> */}
          
        </section>
    </div>
  )
}
