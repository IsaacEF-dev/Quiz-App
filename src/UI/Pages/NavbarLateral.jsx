import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {VscNotebook,BiHomeAlt,FiSettings,AiOutlineUser,ImExit} from "react-icons/all"
import { useAuthStore } from '../../QuizApp/Hooks/useAuthStore'

export const NavbarLateral = ({menu}) => {
    const {startLogout}=useAuthStore();
    const onLogout=(e)=>{
        e.preventDefault();
        startLogout();
    }
  return (
    <div className={`h-screen fixed sm:w-72 sm:left-0 w-[14rem] sm:relative bg-gray-100 ${menu?'-left-2/3':'left-0'} transition-all duration-500`}>
       <div className="px-2  flex flex-col items-center relative h-full">
            <div className="px-2 w-full">
                <Link to="/" className='text-orange-500 font-bold text-2xl sm:absolute relative left-12 sm:-top-14 sm:left-16'>QuizApp</Link>
                <NavLink to="/misCuestionario" className={`link__item`}>
                    <BiHomeAlt className='mr-2 text-lg text-gray-900'/>
                    Inicio
                </NavLink>
                <NavLink to="/misCuestionario" className={"link__item"}>
                    <VscNotebook className='mr-2 text-lg text-gray-900'/>
                    Mis Cuestionarios
                </NavLink>
                <NavLink to="/misCuestionario" className={"link__item"}>
                    <FiSettings className='mr-2 text-lg text-gray-900'/>
                    Ajustes
                </NavLink>
                <NavLink to="/Perfil" className={"link__item"}>
                    <AiOutlineUser className='mr-2 text-lg text-gray-900'/>
                    Mi Perfil
                </NavLink>
            </div>
            <NavLink to="/misCuestionario" 
            className={"flex bg-orange-600 px-4 absolute bottom-28 text-white py-2 items-center rounded-md"}
            onClick={onLogout}>
                    <ImExit className='mr-2 text-lg text-white'/>
                    Salir
            </NavLink>
       </div>
    </div>
  )
}
