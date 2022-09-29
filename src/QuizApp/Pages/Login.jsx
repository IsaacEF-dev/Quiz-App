import React, { useState } from 'react'
import {GrFormViewHide,GrFormView} from "react-icons/gr"
import { useForm } from '../Hooks/useForm';
// import "../../index.css";

export const Login = () => {
  
  const [hidenPassword, setHidenPassword] = useState(false);

  const [typeAccount,setTypeAccount]=useState(true)

  const{inputChange,userName,apellidos,correo,keyUser,onResetForm}=useForm({
    userName:"",
    apellidos:"",
    correo:"",
    keyUser:""
  })

  const viewPassword=()=>{
   setHidenPassword(!hidenPassword)
  }

  const createAccount=(e)=>{
    setTypeAccount(!typeAccount)
  }

  const onAcces=(e)=>{
    e.preventDefault();
    console.log(userName);
    onResetForm();
  }
  
  return (
    <div className='w-10/12 m-auto h-screen font-poppins'>
        <div className="flex justify-center flex-col items-center h-full">
          <h1 className='font-bold text-3xl text-gray-500 mb-10'>Quiz App</h1>
            <form action="" 
            className='overflow-hidden w-[24rem] py-6 px-6 bg-gray-50 shadow-xl relative flex flex-col justify-center relative rounded-md'
            onSubmit={onAcces}>
              <label htmlFor="" className='text-2xl font-bold text-gray-200 m-auto text-center mb-10 z-10'>{typeAccount? "Iniciar Sesion":"Crear Cuenta"}</label>
              
              <div className={`${typeAccount ? "opacity-0 h-0":"opacity-100 h-auto"} 'mb-7 z-10 transition duration-75'`}>
                <label htmlFor="" className='form__label'>Nombre:</label>
                <input type="text" className='form__input' name='userName' value={userName} placeholder='Tu nombre...' onChange={inputChange}/>
              </div>

              <div className={`${typeAccount ? "opacity-0 h-0":"opacity-100 h-auto"} 'mb-7 z-10 transition duration-75'`}>
                <label htmlFor="" className='form__label'>Apellidos:</label>
                <input type="text" className='form__input' name='apellidos' value={apellidos} placeholder='Tus apellidos...' onChange={inputChange}/>
              </div>

              <div className='mb-7 z-10'>
                <label htmlFor="" className='form__label'>Email:</label>
                <input type="Email" className='form__input' name='correo' value={correo} placeholder='Correo Electronico...' onChange={inputChange}/>
              </div>

              <div className='mb-7 z-10 relative'>
                <label htmlFor="" className='form__label'>Password:</label>
                <input type={hidenPassword? "text":"password"} name='keyUser' value={keyUser} className='form__input' placeholder='Password...' onChange={inputChange}/>
                <GrFormView className={`${hidenPassword?"inline-block":"hidden"} absolute right-1 top-2/3 text-white `} onClick={viewPassword}/>
                <GrFormViewHide className={`${hidenPassword?"hidden":"inline-block"} absolute right-1 top-2/3 text-white `} onClick={viewPassword}/>
              </div>

              <button className='bg-orange-500 z-10 text-white font-bold py-3 m-auto w-1/2 rounded-full'>{typeAccount? "Crear Cuenta":"Iniciar Sesion"}</button>
                <p className='font-semibold text-gray-500 text-xs text-center mt-4 cursor-pointer' onClick={createAccount}>{typeAccount? "Crear Cuenta":"Iniciar Sesion"}</p>
                <div className='bg-wave_form rotate-180 absolute top-0 left-0 h-64 w-full bg-no-repeat bg-cover'></div>
            </form>
        </div>
    </div>
  )
}
